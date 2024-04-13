
import './styles.css'
import imgplace from './assets/plchldr.jpeg'
import NavBar from './containers/NavBar'

function App() {

  return (
    <>
      <body>
        <NavBar />
        <div className='row'>
        <div className='article m-3 rounded'>
          <div className='containerimg col-sm'>
          <img src={imgplace} className='rounded'></img>
          </div>
          <h1>Placeholder Title</h1>
          <p className='articletxt'>Lorem ipsum dolor sit amet. Et reprehenderit voluptate ut voluptatem dolores et voluptatem repellendus ea eveniet veniam id ullam placeat. Et explicabo earum et eaque rerum ad omnis autem in rerum eaque non error velit id natus quos ut aliquam eligendi? Ut galisum omnis ut itaque deserunt vel voluptas iure.</p>
        </div>
        <div className='col-sm'>
          <div className='recarticle m-3 rounded d-flex mb-5'>
            <h2>Recommended 1</h2>
          </div>
        </div>
        </div>
      </body>
    </>
  )
}

export default App
