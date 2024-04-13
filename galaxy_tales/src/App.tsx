
import './styles.css'
import imgplace from './assets/plchldr.jpeg'
import NavBar from './containers/NavBar'

function App() {

  return (
    <>
      <body>
        <NavBar />
        <div className='d-flex cont'>
            <div className='article rounded m-3'>
            <img src={imgplace} className='rounded'></img>
            <h1>Placeholder Title</h1>
            <p className='articletxt'>Lorem ipsum dolor sit amet. Et reprehenderit voluptate ut voluptatem dolores et voluptatem repellendus ea eveniet veniam id ullam placeat. Et explicabo earum et eaque rerum ad omnis autem in rerum eaque non error velit id
             natus quos ut aliquam eligendi? Ut galisum omnis ut itaque deserunt vel voluptas iure.</p>
             </div>
            <div className='w-50 d-flex flex-column'>
              <div className='reccontainer rounded my-3'>
              <h2>Recommended 1</h2>
              </div>
              <div className='reccontainer rounded my-3'>
                <h2>Recommended 2</h2>
              </div>
              <div className='reccontainer rounded my-3'>
                <h2>Recommended 3</h2>
              </div>
            </div>
          </div>
      </body>
    </>
  )
}

export default App
