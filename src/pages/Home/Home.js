import { useState } from 'react';
import { Link } from 'react-router-dom'
import '../../components/assets/global.css'
import './home.css';
import calabarzon_video from '../../Videos/calabarzon_video.mp4';
import eye from '../../components/assets/eye.png';
import hearing from '../../components/assets/hearing.png';
import smell from '../../components/assets/smell.png';
import taste from '../../components/assets/taste.png';
import touch from '../../components/assets/touch.png';
import Tahak_nobg from '../../components/assets/Tahak_nobg.png'
import branch1 from '../../components/assets/branch1.png';
import branch2 from '../../components/assets/branch2.png';
import branch3 from '../../components/assets/branch3.png';

function Home() {
    
    const [showPopup, setShowPopup] = useState(null);
    const handleClick = (section) => {
        setShowPopup(prev => (prev === section ? null : section));
    };
    return(

        <>
            <div className='top-wrapper'>
                <video className='video-bg' autoPlay muted loop playsInline>
                    <source  src={calabarzon_video}  type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <img id='tahakLogo' src={Tahak_nobg} alt='TahaK logo'></img>
                <h1 className='animate__animated animate__fadeInDown animate__delay-1s'>Tahanan sa Kalikasan</h1>
                <p className='animate__animated animate__fadeInDown animate__delay-2s'><i>“A wellness journey towards connection. A walk back to your Ka—Kapiling, Katuwang at higit sa lahat, Kasama.”</i></p>
                <p className='animate__animated animate__fadeInDown animate__delay-2s source '>Video source: Tourism Philippines (Youtube)</p>
            </div>

            <div id='about' className='about-page'>
                <img src={branch1} className='branches' id='br1'></img>
                <img src={branch2} className='branches' id='br2'></img>
                <img src={branch3} className='branches' id='br3'></img>
                <div className='about-sections left'>
                    <div className='left-wrapper'>
                        <p id='aboutTitle'>TahaK</p>
                        <img src={Tahak_nobg} alt='something representing Tahak'></img>
                    </div>
                    

                </div>
                <div className='about-sections right'>
                    <section className='sections upper-sect'>
                        <p className='tahakDesc'>
                            <strong>TahaK</strong> (Tahanan sa Kalikasan) is the first wellness-centered tour operator in CALABARZON, inspired by a vision of nature as a healing sanctuary.
                        </p>
                        <p className='tahakDesc'>
                            Its name blends <i>“Tahanan”</i> (home) and <i>“Kalikasan”</i> (environment), symbolizing wellness in nature, while also echoing “tahak” (journey)—a path to healing and self-discovery. 
                        </p> 

                    </section>
                    <section className='sections lower-sect'>
                        <p className='sect-title'>Incorporating the five senses</p>
                        <p className='tahakDesc lower-desc'>
                            Each curated experience engages the body and mind through Filipino-centered rituals and environments.
                        </p>
                        <ul className='senses-list'>
                            <li><img className='senses' src={eye} alt='sight'></img></li>
                            <li><img className='senses' src={smell} alt='smell'></img></li>
                            <li><img className='senses' src={taste} alt='taste'></img></li>
                            <li><img className='senses' src={hearing} alt='hearing'></img></li>
                            <li><img className='senses' src={touch} alt='touch'></img></li>
                        </ul>
                    </section>
                </div>
            </div>

            
            <section className='parallax' id='pxAbout'>
                <div className='parallax-inner'>

                    <div className='pr-wrapper'>
                        <p className='pr-title'>Why TahaK?</p>
                        <hr></hr>
                    </div>
                    
                    <ul className='pr-list about-list'>
                        <li onClick={() => handleClick('story')} >
                            <p id='storyText'>Story</p>
                            <hr></hr>
                        </li>
                        <li onClick={() => handleClick('mission')}>
                            <p id='missionText'>Mission</p>
                            <hr></hr>
                        </li>
                        <li onClick={() => handleClick('vision')}>
                            <p id='visionText'>Vision</p>
                            <hr></hr>
                        </li>
                    </ul>

                    <div className='popup-container'>
                
                            <div className={`popup-info story ${showPopup === 'story' ? 'show' : ''}`}>
                                <p>TahaK (Tahanan sa Kalikasan) is the first wellness-focused tour operator offering curated packages in CALABARZON, born from a vision to create a sanctuary where nature becomes a home for travelers seeking healing and transformation. The name TahaK is a meaningful fusion of two Filipino words—“Tahanan” (home) and “Kalikasan” (environment), signifying the environment as a home for wellness. It also echoes the Filipino word “tahak”, meaning journey, reinforcing the idea of a path toward healing and self-discovery.</p>
                            </div>
                      

                        <div className={`popup-info mission ${showPopup === 'mission' ? 'show' : ''}`}>
                            <p>To provide a Filipinized wellness tourism experience that nurtures the body, mind, and soul through immersive tours and wellness exercises engaging all five senses - sight, smell, touch, taste, and sound - across diverse, serene Philippine destinations. </p>
                        </div>

                        <div className={`popup-info vision ${showPopup === 'vision' ? 'show' : ''}`}>
                            <p>To be the leading pioneer in Filipinized wellness tourism, recognized globally for offering transformative, sensory-rich journeys that celebrate the Philippines’ rich cultural heritage and natural beauty. </p>
                        </div>
                    </div>
                </div>
            </section>


            <div className='calabarzon'>
                <div className='calabarzon-wrapper'>
                    <h3 id='calabarzon-title'>CALABARZON</h3>
                </div>
            </div>
            {/* <div className='margin'></div> */}


        </>
        

    );
}

export default Home;