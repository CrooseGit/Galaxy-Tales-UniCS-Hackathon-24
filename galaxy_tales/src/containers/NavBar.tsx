import '../styles.css';
import spcimg from '../assets/space.png';
import logoimg from '../assets/logo.png';

const NavBar = ({ setAgeGroup, ageGroup }) => {
  const handleAgeGroupChange = (selectedAgeGroup: string) => {
    setAgeGroup(selectedAgeGroup);
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light d-flex nav${ageGroup}`}
    >
      <a
        className={`navbar-brand navtxt${ageGroup} navcon nav${ageGroup}`}
        href=''
      >
        <img src={logoimg} className='img-fluid w-25 navcon'></img>Galaxy Tales
      </a>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <img src={spcimg} className='img-fluid w-25 navcon'></img>
        <div className={`dropdown navtxt${ageGroup} navcon`}>
          <button className={`dropbtn${ageGroup}`}>Age Group</button>
          <div className={`dropdown-content${ageGroup}`}>
            <a
              onClick={() => {
                handleAgeGroupChange('primary');
              }}
            >
              Primary
            </a>
            <a
              onClick={() => {
                handleAgeGroupChange('secondary');
              }}
            >
              Secondary
            </a>
            <a
              onClick={() => {
                handleAgeGroupChange('adult');
              }}
            >
              Adults
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
