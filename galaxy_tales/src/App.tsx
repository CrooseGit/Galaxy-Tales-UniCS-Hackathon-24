import './styles.css';
import imgplace from './assets/plchldr.jpeg';
import NavBar from './containers/NavBar';
import RecContainer from './containers/RecContainer';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface fullArticle {
  id: number;
  simple_type: string;
  title: string;
  content: string;
  date_pub: Date;
  source_url: string;
  author: string;
  image_url: string;
}

interface snippetArticle {
  id: number;
  simple_type: string;
  title: string;
  content: string;
}

function App() {
  const [currentArticle, setCurrentArticle] = useState<fullArticle>({
    id: 58,
    title: 'title',
    simple_type: 'string',
    content: 'string',
    date_pub: new Date(),
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
      date_pub: new Date(),
      source_url: 'string',
      author: 'string',
      image_url: 'string',
    },
    {
      id: -1,
      title: 'title',
      simple_type: 'string',
      content: 'string',
      date_pub: new Date(),
      source_url: 'string',
      author: 'string',
      image_url: 'string',
    },
    {
      id: -1,
      title: 'title',
      simple_type: 'string',
      content: 'string',
      date_pub: new Date(),
      source_url: 'string',
      author: 'string',
      image_url: 'string',
    },
  ]);
  const [simple_type, setSimple_type] = useState('secondary');

  useEffect(() => {
    getRecentArticle();
  }, []);
  useEffect(() => {
    getNextArticles(3);
  }, [currentArticle]);

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
          date_pub: response.data.date_pub,
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
        simple_type: simple_type,
      })
      .then((response: any) => {
        console.log(response);
        setCurrentArticle({
          id: response.data.id,
          simple_type: response.data.simple_type,
          title: response.data.title,
          content: response.data.content,
          date_pub: response.data.date_pub,
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
      <NavBar />
      <div className='d-flex cont'>
        <div className='article rounded m-3 p-3'>
          <div className='text-center'>
            <img src={currentArticle.image_url} className='rounded mb-3'></img>
          </div>
          <h1>{currentArticle.title}</h1>
          <p className='articletxt'>{currentArticle.content}</p>
        </div>
        <div className='w-50 d-flex flex-column'>
          {nextArticles.map(({ title, content, id }: fullArticle, index) => (
            <RecContainer
              key={title + '_' + index}
              title={title}
              content={content}
              id={id}
              onClick={(id) => {
                getArticle(id);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
