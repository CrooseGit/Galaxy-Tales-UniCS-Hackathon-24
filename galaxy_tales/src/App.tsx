import './styles.css';
import { useState, useEffect } from 'react';
import imgplace from './assets/plchldr.jpeg';
import NavBar from './containers/NavBar';
import RecContainer from './containers/RecContainer';
import axios from 'axios';

interface fullArticle {
  id: number;
  simple_type: string;
  title: string;
  content: string;
  pub_date: string;
  source_url: string;
  author: string;
  image_url: string;
}

function App() {
  const [ageGroup, setAgeGroup] = useState('primary');
  const [currentArticle, setCurrentArticle] = useState<fullArticle>({
    id: 58,
    title: 'title',
    simple_type: 'string',
    content: 'string',
    pub_date: 'new Date()',
    source_url: 'string',
    author: 'string',
    image_url: 'string',
  });
  const [nextArticles, setNextArticles] = useState<fullArticle[]>([
    {
      id: 58,
      title: 'title',
      simple_type: 'string',
      content: 'string',
      pub_date: 'new Date()',
      source_url: 'string',
      author: 'string',
      image_url: 'string',
    },
    {
      id: 58,
      title: 'title',
      simple_type: 'string',
      content: 'string',
      pub_date: 'new Date()',
      source_url: 'string',
      author: 'string',
      image_url: 'string',
    },
    {
      id: 58,
      title: 'title',
      simple_type: 'string',
      content: 'string',
      pub_date: 'new Date(',
      source_url: 'string',
      author: 'string',
      image_url: 'string',
    },
  ]);

  useEffect(() => {
    getRecentArticle();
  }, []);
  useEffect(() => {
    getNextArticles(3);
  }, [currentArticle]);

  useEffect(() => {
    getAlternativeArticle(currentArticle.id, ageGroup);
  }, [ageGroup]);

  const getArticle = (id: number) => {
    console.log('getArticle');
    axios
      .post('http://127.0.0.1:8000/website_api/getArticle/', {
        id: id,
      })
      .then((response) => {
        setCurrentArticle({
          id: response.data.id,
          simple_type: response.data.simple_type,
          title: response.data.title,
          content: response.data.content,
          pub_date: response.data.pub_date,
          source_url: response.data.source_url,
          author: response.data.author,
          image_url: response.data.image_url,
        });
      })
      .catch((error: any) => {
        console.log('error ', error);
      });
  };

  const getAlternativeArticle = (id: number, simple_type: string) => {
    console.log('getAlternativeArticle');
    axios
      .post('http://127.0.0.1:8000/website_api/getAlternativeArticle/', {
        id: id,
        simple_type: simple_type,
      })
      .then((response) => {
        setCurrentArticle({
          id: response.data.id,
          simple_type: response.data.simple_type,
          title: response.data.title,
          content: response.data.content,
          pub_date: response.data.pub_date,
          source_url: response.data.source_url,
          author: response.data.author,
          image_url: response.data.image_url,
        });
      })
      .catch((error: any) => {
        console.log('error ', error);
      });
  };

  const getRecentArticle = () => {
    console.log('getRecentArticle');
    axios
      .post('http://127.0.0.1:8000/website_api/getRecentArticle/', {
        simple_type: ageGroup,
      })
      .then((response: any) => {
        console.log(response);
        setCurrentArticle({
          id: response.data.id,
          simple_type: response.data.simple_type,
          title: response.data.title,
          content: response.data.content,
          pub_date: response.data.pub_date,
          source_url: response.data.source_url,
          author: response.data.author,
          image_url: response.data.image_url,
        });
      })
      .catch((error: any) => {
        console.log('error ', error);
      });
  };

  const getNextArticles = (quantity: number) => {
    console.log('GetNextArticles');
    axios
      .post('http://127.0.0.1:8000/website_api/getNextArticles/', {
        quantity: quantity,
        id: currentArticle.id,
      })
      .then((response) => {
        console.log(response);
        setNextArticles(response.data);
      })
      .catch((error: any) => {
        console.log('error ', error);
      });
  };

  return (
    <>
      <NavBar setAgeGroup={setAgeGroup} ageGroup={ageGroup} />
      <div className='d-flex cont'>
        <div className={`article rounded m-3 p-3 ${ageGroup}`}>
          <div className='text-center'>
            <img src={currentArticle.image_url} className='rounded mb-3'></img>
          </div>
          <h1 className='overflow-auto titleCont'>
            <a
              href={currentArticle.source_url}
              className='currentTitle overflow-auto'
            >
              {currentArticle.title}
            </a>
          </h1>
          <p className='extras d-flex'>
            <div className='me-5'>{currentArticle.author}</div>
            <div className='ms-5'>
              Time Accessed: {currentArticle.pub_date.substring(0, 10)}
            </div>
          </p>
          <p className='articletxt overflow-auto'>{currentArticle.content}</p>
        </div>
        <div className='w-50 h-100 d-flex flex-column'>
          {nextArticles.map((article: fullArticle, index) => (
            <RecContainer
              title={article.title}
              content={article.content}
              simple_type={article.simple_type}
              onClick={(id) => getArticle(id)}
              key={'article' + index}
              id={article.id}
              ageGroup={ageGroup}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
