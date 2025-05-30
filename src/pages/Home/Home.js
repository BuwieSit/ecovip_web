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
                        <p className='tahakDesc'>
                            As <strong>TahaK</strong> puts it: <i>“Ito ay pagtahak sa Pilipinas, sa payapang pahingahan tungo sa ganap na kaginhawaan.”</i> This reflects its mission to guide travelers toward wellness through nature.
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
                        <li>
                            <p>Story</p>
                            <hr></hr>
                        </li>
                        <li>
                            <p>Mission</p>
                            <hr></hr>
                        </li>
                        <li>
                            <p>Vision</p>
                            <hr></hr>
                        </li>
                    </ul>
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