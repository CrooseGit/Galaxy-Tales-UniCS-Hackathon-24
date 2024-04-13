import { launch } from "puppeteer";
import * as cheerio from "cheerio";
import axios from "axios";
import { enableANSIColors } from "bun";

// type ResultsArray = string[];

const scrapeSite = async (url) => {
  //: string
  try {
    const browser = await launch({ headless: true });
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
    );
    await page.goto(url, { waitUntil: "networkidle0" });
    const content = await page.content();
    await browser.close();
    const $ = cheerio.load(content);
    // const $: cheerio.CheerioAPI = cheerio.load(content);
    return $;
  } catch (error) {
    console.log("error: ", error);
  }
};

const getURLs = async ($) => {
  //: any
  const urls = []; // : string[]
  $(".site-content .main-content > article").each((_, el) => {
    const $article = $(el);
    const url = $article.find(".entry-container h2.entry-title a").attr("href");
    if (url) {
      urls.push(url);
    }
  });
  return urls;
};

const getData = async ($) => {
  //: any
  try {
    const title = $("main.site-main h1.entry-title").text().trim();
    const author = $("span.vcard > a.url").text().trim();
    const releasedDate = $("span.posted-on > time.entry-date").text().trim();
    const photoURL = $("figure.post-thumbnail > img").attr("src");
    const content = $(".main-content > article .entry-content > p")
      .map((_, el) => $(el).text().trim())
      .get();
    const fullContent = content.join(" ");
    // console.log(
    //   "title: ",
    //   title,
    //   "author: ",
    //   author,
    //   "releasedDate: ",
    //   releasedDate,
    //   "photoURL: ",
    //   photoURL,
    //   "content: ",
    //   fullContent
    // );
    return [title, author, releasedDate, photoURL, fullContent];
  } catch (error) {
    console.log("error: ", error);
  }
};

function delay(ms) {
  //: number
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const process = async (urls) => {
  //: string[]
  try {
    const l = []; //: string[]
    for (let url of urls) {
      const getAll = await scrapeSite(url);
      const urlList = await getURLs(getAll);
      l.push(urlList);
    }
    const listOfStrings = l.flat().map((url) => url.toString()); //: string[]
    console.log(listOfStrings); // working fine...

    const data = [];
    for (let item = 0; item < 2; item++) {
      await delay(1000);
      const page = await scrapeSite(listOfStrings[item]);
      const id = item;
      const results = await getData(page);
      data.push({
        id: id,
        url: listOfStrings[item],
        title: results[0],
        author: results[1],
        releasedDate: results[2],
        photoURL: results[3],
        content: results[4],
      });
    }
    // if (data !== "") {
    //   return data;
    // }
    return data;
  } catch (error) {
    console.log("error: ", error);
  }
};

let mainURLs = [
  "https://spacenews.com/section/news-archive/",
  // "https://spacenews.com/section/news-archive/page/2/",
  // "https://spacenews.com/section/news-archive/page/3/",
];

// const scrapeData = process(mainURLs);

// interface ScrapeData {
//   id: number;
//   url: string;
//   title: string;
//   author: string;
//   releasedDate: string;
//   photoURL: string;
//   content: string;
// }

const mainuu = await process(mainURLs);
console.log(mainuu);

mainuu.forEach(async (data) => {
  const requestData = {
    title: data.title,
    pub_date: data.releasedDate,
    source_url: data.url,
    author: data.author,
    content: data.content,
    image_url: data.photoURL,
  };

  const res = await fetch("http://127.0.0.1:8000/articles_api/addRawArticle/", {
    method: "POST",
    headers: {
      CSRF_COOKIE: "wy2qXFJY0n96hpAMo6xSJwRfRaqDEqgg",
    },
    body: JSON.stringify(requestData),
  });
  console.log(res.status);
});

// const scrapeData = process(mainURLs).then((result) => {
//   for (const data of result) {
//     const requestData = {
//       title: data.title,
//       pub_date: data.releasedDate,
//       source_url: data.url,
//       author: data.author,
//       content: data.content,
//       image_url: data.photoURL,
//     };
//     console.log("Data: ", data.title);

//     axios
//       .post("http://127.0.0.1:8000/articles_api/addRawArticle", requestData)
//       .then((response) => {
//         console.log(response.status);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// }); //: ScrapeData[]

// for (const data of scrapeData) {
//   const requestData = {
//     title: data.title,
//     pub_date: data.releasedDate,
//     source_url: data.url,
//     author: data.author,
//     content: data.content,
//     image_url: data.photoURL,
//   };

//   axios
//     .post("http://10.205.87.190:8000/articles_api/addRawArticle", requestData)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// title = models.TextField()
//     pub_date = models.DateTimeField()
//     source_url = models.URLField()
//     author= models.TextField()
//     content = models.TextField()
//     image_url = models.URLField()

// http://10.205.87.190:8000/articles_api/addRawArticle
