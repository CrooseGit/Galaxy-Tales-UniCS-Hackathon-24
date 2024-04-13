import './styles.css';
import imgplace from './assets/plchldr.jpeg';
import NavBar from './containers/NavBar';
import RecContainer from './containers/RecContainer';

function App() {
  const getRecommendations = (article: number) => {
    console.log(article);
    return [
      { title: '', content: '' },
      { title: '', content: '' },
      { title: '', content: '' },
    ];
  };

  return (
    <>
      <body>
        <NavBar />
        <div className='d-flex cont'>
<<<<<<< HEAD
            <div className='article rounded m-3 p-3'>
              <div className='text-center'>
                <img src={imgplace} className='rounded mb-3'></img>
              </div>
              <h1>Placeholder Title</h1>
              <p className='articletxt'>Lorem ipsum dolor sit amet. Et reprehenderit voluptate ut voluptatem dolores et voluptatem repellendus ea eveniet veniam id ullam placeat. Et explicabo earum et eaque rerum ad omnis autem in rerum eaque non error velit id
                  natus quos ut aliquam eligendi? Ut galisum omnis ut itaque deserunt vel voluptas iure.</p>
            </div>
            <div className='w-50'>
              <div className='reccontainer rounded my-3 p-2'>
              <h2>Recommended 1</h2>
              </div>
              <div className='reccontainer rounded my-3 p-2'>
                <h2>Recommended 2</h2>
              </div>
              <div className='reccontainer rounded my-3 p-2'>
                <h2>Recommended 3</h2>
              </div>
            </div>
=======
          <div className='article rounded m-3'>
            <img src={imgplace} className='rounded'></img>
            <h1>Placeholder Title</h1>
            <p className='articletxt'>
              Lorem ipsum dolor sit amet. Et reprehenderit voluptate ut
              voluptatem dolores et voluptatem repellendus ea eveniet veniam id
              ullam placeat. Et explicabo earum et eaque rerum ad omnis autem in
              rerum eaque non error velit id natus quos ut aliquam eligendi? Ut
              galisum omnis ut itaque deserunt vel voluptas iure.
            </p>
>>>>>>> 5a78c9b1e31449d3a8c2e19be6d4a7941908cefa
          </div>
          <div className='w-50 d-flex flex-column'>
            {getRecommendations(0).map(
              (article: { title: string; content: string }) => (
                <RecContainer title={article.title} content={article.content} />
              )
            )}
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
