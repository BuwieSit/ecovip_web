import '../../components/assets/global.css';
import './content.css';
import masungi from '../../components/assets/masungi.jpg';
import pagsanjan from '../../components/assets/pagsanjan.jpg';
import banahaw from '../../components/assets/banahaw.jpg';
import water_trans from '../../components/assets/water_trans.png';
import beans_trans from '../../components/assets/beans_trans.png';
import bush_trans from '../../components/assets/bush_trans.png';
import herbal_trans from '../../components/assets/herbal_trans.png';
import kapwa from '../../components/assets/Tour Package/kapwa.png'
import kapwaImage from '../../components/assets/kapwaImage.png'
import 'animate.css';
 
function Content() {

    return(
        <>
           {/* CAVITE */}
            <div className='theme-transition' id='packages'>
                <img src={beans_trans} alt='not available' id='beans' ></img>
            </div>

            <section className='parallax' id='cavitePackage'>
                <div className='parallax-inner'>
                    <img src={kapwa} alt='not available' id='kapwaPackage' className='carousel-content'></img>
                    <div className='image-carousel kapwa-carousel'>
                        <img src={kapwaImage}></img>
                    </div>
                </div>
            </section>

            {/*LAGUNA - BATANGAS*/}
            <div className='theme-transition' id='packages'>
                <img src={water_trans} alt='not available' id='water' ></img>
            </div>

            <section className='parallax' id='lagunaBatPackage'>
                <div className='parallax-inner'>
                    <div className='package-wrapper' id='lagBat-wrapper'>
                            <div className='img-wrapper'><img src={pagsanjan} alt='Destination-picture' id='package-img'></img></div>

                            <div className='title-wrapper animate__animated animate__slideInDown'>
                                <h1 id='packName'>Kadalisayan</h1>
                            </div>

                            <div className='info-wrapper'>
                                <p className='description'>Coffee-inspired experience that nurtures connection, creativity, and self-discovery.</p>
                                <div className='more-wrapper'>
                                    <p id='price'>₱₱₱</p>
                                    <p id='pax'>5-10 pax</p>
                                </div>
                            </div>
                    </div>

                    <div className='package-description'  id='lagBatDesc'>
                        
                    </div>
                
                </div>
            </section>
        
        {/* RIZAL */}
        <div className='theme-transition' id='packages'>
                <img src={bush_trans} alt='not available' id='water' ></img>
            </div>

            <section className='parallax' id='rizalPackage'>
                <div className='parallax-inner'>
                    <div className='package-wrapper' id='rizal-wrapper'>
                            <div className='img-wrapper'><img src={masungi} alt='Destination-picture' id='package-img'></img></div>

                            <div className='title-wrapper animate__animated animate__slideInDown'>
                                <h1 id='packName'>Kalikhasan</h1>
                            </div>

                            <div className='info-wrapper'>
                                <p className='description'>Coffee-inspired experience that nurtures connection, creativity, and self-discovery.</p>
                                <div className='more-wrapper'>
                                    <p id='price'>₱₱₱</p>
                                    <p id='pax'>5-10 pax</p>
                                </div>
                            </div>
                    </div>

                    <div className='package-description'  id='rizalDesc'>
                        
                    </div>
                
                </div>
            </section>
        

        {/* QUEZON */}
        <div className='theme-transition' id='packages'>
                <img src={herbal_trans} alt='not available' id='water' ></img>
            </div>

            <section className='parallax' id='quezonPackage'>
                <div className='parallax-inner'>
                    <div className='package-wrapper' id='quezon-wrapper'>
                            <div className='img-wrapper'><img src={banahaw} alt='Destination-picture' id='package-img'></img></div>

                            <div className='title-wrapper animate__animated animate__slideInDown'>
                                <h1 id='packName'>Kabanhawan</h1>
                            </div>

                            <div className='info-wrapper'>
                                <p className='description'>Coffee-inspired experience that nurtures connection, creativity, and self-discovery.</p>
                                <div className='more-wrapper'>
                                    <p id='price'>₱₱₱</p>
                                    <p id='pax'>5-10 pax</p>
                                </div>
                            </div>
                    </div>

                    <div className='package-description'  id='quezonDesc'>
                        
                    </div>
                
                </div>
            </section>
        </> 

    );
}

export default Content;