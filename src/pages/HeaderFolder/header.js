import { Outlet, Link } from "react-router-dom";
import './header.css';
import '../../components/assets/global.css';
import search from '../../components/assets/search.png';
import { useEffect, useRef } from 'react';

function Head() {
    const testRef = useRef('');

    useEffect(() => {
        const handleClick = () => {
            
        };

        const testEl = testRef.current;
        if (testEl) {
            testEl.addEventListener('click', handleClick);
        }

        return () => {
            if (testEl) {
                testEl.removeEventListener('click', handleClick);
            }
        };
    }, []);

    return (
        <div className='head'>
            <div className='nav-list'>
                <ul>
                    <li> <Link to={"/"}>Home</Link> </li>
                    <li> About</li>
                    <li> Packages</li>
                    <li> Contact</li>
                    <li id='test' > <Link to={"/Test.js"}>Test</Link></li>
                </ul>
            </div>
            <Outlet />
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
