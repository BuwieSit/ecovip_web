import '../../components/assets/global.css';
import './content.css';
import masungi from '../../components/assets/masungi.jpg';

let package_title = document.getElementById('packName');

 
function Content() {

    return(

        <div className='main-wrapper'>
            <div className='package-wrapper'>
                <div className='img-wrapper'><img src={masungi} alt='Destination-picture' id='package-img'></img></div>
                <div className='title-wrapper'>
                    <h2 id='packName'>Nature Package</h2>
                </div>
                <div className='info-wrapper'>
                    <p id='description'>This nature package rejuvenates the soul.</p>
                    <div className='more-wrapper'>
                        <p id='price'>$$$</p>
                        <p id='moreInfo'>More Information</p>
                    </div>
                </div>
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