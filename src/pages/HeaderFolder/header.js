import './header.css'
import '../../components/assets/global.css'
import search from '../../components/assets/search.png'

function Head() {
    return (
        <div className='head'>
            
            <div className='nav-list'>
                
                <ul>
                    <li> Home </li>
                    <li> About</li>
                    <li> Packages</li>
                    <li> Contact</li>
                </ul>
            </div>

            <div className='search-wrapper'>
                    <form autoComplete='off'>
                        <input name="srch" id="srch" placeholder="eco-search"></input>
                        <img src={search} alt='search' id='srchSymbol'></img>
                    </form>
                    
            </div>
            <div className='logo-cont'>
                <h1 id='logo'>Logo Placeholder</h1>
            </div>

        </div>

    );
}
export default Head;