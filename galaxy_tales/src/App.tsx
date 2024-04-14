import './styles.css';
import { useState, useEffect } from 'react';
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
  const [ageGroup, setAgeGroup] = useState("primary");
  
  const getRecommendations = (article: number) => {
    console.log(article);
    return [
      { title: 'The Absolute Gall of this Rover', content: '' },
      { title: '', content: '' },
      { title: '', content: '' },
    ];
  };

  const backgroundclr = "bg-" + ageGroup
  console.log(backgroundclr)

  return (
    <>
      <body>
        <NavBar setAgeGroup={setAgeGroup} ageGroup={ageGroup} />
        <div className='d-flex cont'>
          <div className={`article rounded m-3 p-3 ${ageGroup}`}>
            <div className='text-center'>
              <img src={imgplace} className='rounded mb-3'></img>
            </div>
            <h1>Placeholder Title</h1>
            <p className='articletxt'>
              Lorem ipsum dolor sit amet. Et reprehenderit voluptate ut
              voluptatem dolores et voluptatem repellendus ea eveniet veniam id
              ullam placeat. Et explicabo earum et eaque rerum ad omnis autem in
              rerum eaque non error velit id natus quos ut aliquam eligendi? Ut
              galisum omnis ut itaque deserunt vel voluptas iure.
            </p>
          </div>
          <div className='w-50 h-100 d-flex flex-column'>
            {getRecommendations(0).map(
              (article: { title: string; content: string }) => (
                <RecContainer title={article.title} content={article.content} ageGroup={ageGroup}/>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
