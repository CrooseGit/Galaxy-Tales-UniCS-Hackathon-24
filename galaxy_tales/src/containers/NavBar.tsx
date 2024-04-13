import '../styles.css'
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand navtxt" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link navtxt" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link navtxt" href="#">Link</a>
            </li>
            
            <li className="nav-item">
                <a className="nav-link disabled navtxt" href="#">Disabled</a>
            </li>
            </ul>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
        </nav>
    )
}
export default NavBar;