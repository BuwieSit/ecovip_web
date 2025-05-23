import './header.css';
import '../../components/assets/global.css';
import search from '../../components/assets/search.png';
import Tahak_nobg from '../../components/assets/Tahak_nobg.png'

function Head() {
    return (
        <div className='head'>
            <div className='nav-list'>
                <ul>
                    <li> <a href='#'>Home</a>  </li>
                    <li> <a href='#about'>About</a></li>
                    <li> <a href='#packages'>Packages</a></li>
                    <li> <a href=''>Contact</a></li>
                </ul>
            </div>
            <div className='search-wrapper'>
                <form autoComplete='off'>
                    <input name="srch" id="srch" placeholder="search thru CALABARZON"></input>
                    <img src={search} alt='search' id='srchSymbol'></img>
                </form>
            </div>

            <div className='logo-cont'>
                <img src={Tahak_nobg}></img>
            </div>
        </div>
    );
}

export default Head;
