import './styles.css';
import { useState, useEffect } from 'react';
import imgplace from './assets/plchldr.jpeg';
import NavBar from './containers/NavBar';
import RecContainer from './containers/RecContainer';

function App() {
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
      </body>
    </>
  );
}

export default App;
