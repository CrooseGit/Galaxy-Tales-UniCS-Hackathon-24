import '../styles.css'
import spcimg from '../assets/space.png'
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light d-flex">
            <a className="navbar-brand navtxt navcon" href="#">Galaxy Tales</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <img src={spcimg} className='img-fluid w-25 navcon'></img>
                    <div className="dropdown navtxt navcon">
                        <button className="dropbtn ">Age Group</button>
                        <div className="dropdown-content">
                            <a href="abc">Primary</a>
                            <a href="#">Secondary</a>
                            <a href="#">Adults</a>
                        </div>
                    </div>
            </div>
        </nav>
    )
}
export default NavBar;