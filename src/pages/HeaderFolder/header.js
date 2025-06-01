import './header.css';
import '../../components/assets/global.css';
import { Link } from 'react-router-dom'; 



import search from '../../components/assets/search.png';
import Tahak_nobg from '../../components/assets/Tahak_nobg.png';


function Head() {

  return (
    <div className='head'>

      <div className='logo-cont'>
        <img src={Tahak_nobg} alt="logo" />
        <div className='search-wrapper'>
          <form autoComplete='off'>
            <input name="srch" id="srch" placeholder="search thru CALABARZON" />
            <img src={search} alt='search' id='srchSymbol' />
          </form>
        </div>
      </div>

      <div className='nav-list'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/About_Page'>About</Link></li>
          <li><Link to='/Package_Page'>Packages</Link></li>
          <li><Link to='/Contact_Page'>Contact</Link></li>
          <li>
            <Link to='/create'>
              <button id='createBtn'>Create</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Head;
