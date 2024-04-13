import { launch } from "puppeteer";
import * as cheerio from "cheerio";

type ResultsArray = string[];

const scrapeSite = async (url: string) => {
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

const getURLs = async ($: any) => {
  const urls: string[] = [];
  $(".site-content .main-content > article").each((_, el) => {
    const $article = $(el);
    const url = $article.find(".entry-container h2.entry-title a").attr("href");
    if (url) {
      urls.push(url);
    }
  });
  return urls;
};

const getData = async ($: any) => {
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

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const process = async (urls: string[]) => {
  try {
    const l: string[] = [];
    for (let url of urls) {
      const getAll = await scrapeSite(url);
      const urlList = await getURLs(getAll);
      l.push(urlList);
    }
    const listOfStrings: string[] = l.flat().map((url) => url.toString());
    console.log(listOfStrings); // working fine...

    const data = [{}];
    for (let item = 0; item < listOfStrings.length; item++) {
      await delay(5000);
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
      console.log(data);
    }
    // console.log(data);
  } catch (error) {
    console.log("error: ", error);
  }
};

let mainURLs = [
  "https://spacenews.com/section/news-archive/",
  "https://spacenews.com/section/news-archive/page/2/",
  "https://spacenews.com/section/news-archive/page/3/",
];

process(mainURLs);

// DATABASES = {
//   'default': {
//     'ENGINE': 'django.db.backends.postgresql',
//     'NAME': 'articledb',
//     'USER': 'articledb_owner',
//     'PASSWORD': 'XsVBrHlW3t8C',
//     'HOST': 'ep-solitary-wave-a23ptxbh.eu-central-1.aws.neon.tech',
//     'PORT': 5432,
//     'OPTIONS': {
//       'sslmode': 'require',
//     },
//   }
// }

// import axios from 'axios';

// const jsonData = {
// };

// axios.post('/api/save-data/', jsonData)
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error(error);
//     });
