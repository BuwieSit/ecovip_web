import '../../components/assets/global.css'
import './home.css';
import masungi from '../../components/assets/masungi.jpg';

function Home() {

    return(
        <>
            <div className='top-wrapper'>
                <img src={masungi} alt='masungi' id='masungi'></img>
            </div>
            <div className='margin'></div>
        </>
        
        
    );
}

export default Home;