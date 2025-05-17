import '../../components/assets/global.css';
import './content.css';
import masungi from '../../components/assets/masungi.jpg';

function Content() {

    return(

        <div className='main-wrapper'>
            <div className='package-wrapper'>
                <div className='img-wrapper'><img src={masungi} alt='Destination-picture' id='package-img'></img></div>
            </div>
            <div className='package-wrapper'>

            </div>
            <div className='package-wrapper'>

            </div>
            <div className='package-wrapper'>

            </div>
            <div className='package-wrapper'>

            </div>
            <div className='package-wrapper'>

            </div>

        </div>

    );
}

export default Content;