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
import kadalisayan from '../../components/assets/Tour Package/kadalisayan.png'
import kalikhasan from '../../components/assets/Tour Package/kalikhasan.png'
import kabanhawan from '../../components/assets/Tour Package/kabanhawan.png'
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
                    <div className='description-box kapwa-desc'>
                        <div className='package-wrapper desc-wrapper'>
                            <h3>ABOUT CAVITE</h3>
                            <p>Cavite, located in the CALABARZON region, is a province rich in culture, community, and local pride. In the town of Amadeo—known as the “Coffee Capital of the Philippines”—coffee is celebrated not just as a drink, but as a symbol of “Kapwa,” the Filipino value of shared identity and connection. The Kapwa Package brings this spirit to life through meaningful coffee-centered experiences that promote wellness and community engagement.</p>
                        </div>
                        <div className='package-wrapper highlights-wrapper'>
                            <h3>Key Highlights</h3>
                            <ul>
                                <li> Immerse yourself in the essence of “Kapwa” through coffee-centered wellness activities in the peaceful town of Amadeo.</li>
                                <li>Engage in meaningful experiences such as coffee aromatherapy, mindful brewing and tasting, and soothing coffee scrub sessions.</li>
                                <li>Explore coffee farms, walk through scenic plantations, and participate in coffee tree planting to support sustainability.</li>
                                <li>Discover the cultural and therapeutic significance of coffee as it connects people and communities.</li>
                                <li>Support sustainable tourism by experiencing local traditions and promoting Cavite’s signature product—coffee—with purpose.</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/*LAGUNA - BATANGAS*/}
            <div className='theme-transition' id='packages'>
                <img src={water_trans} alt='not available' id='water' ></img>
            </div>

            <section className='parallax' id='lagunaBatPackage'>
                <div className='parallax-inner'>

                   <img src={kadalisayan} alt='not available' id='kadalisayanPackage' className='carousel-content'></img>
                    <div className='description-box kadalisayan-desc'>
                        <div className='package-wrapper desc-wrapper'>
                            <h3>ABOUT LAGUNA AND BATANGAS</h3>
                            <p>Laguna and Batangas offer a peaceful escape where water and land come together to support wellness and connection with nature. The Kadalisayan Package—named after the Filipino word for “clear intention”—invites guests to embrace clarity, calm, and purposeful presence through immersive experiences. Set against the backdrop of iconic sites like Pagsanjan Falls, this package encourages mindful engagement with the environment and the self.</p>
                        </div>
                        <div className='package-wrapper highlights-wrapper'>
                            <h3>Key Highlights</h3>
                            <ul>
                                <li>Journey through the flowing waters of Pagsanjan Falls with canoe rides and bamboo rafting that symbolize renewal and release.</li>
                                <li>Practice mindfulness with reflective land-based activities such as fish feeding, view painting, and savoring local cuisine.</li>
                                <li>Cultivate inner peace and physical vitality through Arnis-based meditation and yoga sessions.</li>
                                <li>Embrace the spirit of “Kadalisayan” by engaging in experiences that promote clarity, intention, and holistic wellness.</li>
                                <li>Connect deeply with nature and community through thoughtfully curated water and land experiences.</li>
                            </ul>
                        </div>
                        
                    </div>
                
                </div>
            </section>
        
        {/* RIZAL */}
        <div className='theme-transition' id='packages'>
                <img src={bush_trans} alt='not available' id='water' ></img>
            </div>

            <section className='parallax' id='rizalPackage'>
                <div className='parallax-inner'>

                    <img src={kalikhasan} alt='not available' id='kalikhasanPackage' className='carousel-content'></img>
                        <div className='description-box kalikhasan-desc'>
                            <div className='package-wrapper desc-wrapper'>
                                <h3>ABOUT RIZAL</h3>
                                <p>Rizal province offers a sanctuary for creativity, reflection, and deep connection with nature. The Kalikhasan Package, from the words “likha” (creation) and “kalikasan” (nature), celebrates the harmony between human expression and the natural world. Through immersive, eco-centered experiences, guests are invited to create, reflect, and grow while embracing the beauty and wisdom of Rizal’s landscapes.</p>
                            </div>
                            <div className='package-wrapper highlights-wrapper'>
                                <h3>Key Highlights</h3>
                                <ul>
                                    <li>Reconnect with nature through forest bathing, scenic treks, and waterfall meditation at Hinulugang Taktak.</li>
                                    <li>Take part in community gardening and outdoor painting sessions using natural dyes for a creative, earth-centered experience.</li>
                                    <li>Engage in meaningful reflections through communal circles at Masungi Georeserve and tranquil firefly watching.</li>
                                    <li>Cultivate mindfulness and environmental stewardship by participating in eco-friendly, wellness-driven activities.</li>
                                    <li>Celebrate “Kalikhasan” by co-creating personal and collective experiences rooted in nature and sustainability.</li>
                                </ul>
                            </div>
                            
                        </div>

                </div>
            </section>
        

        {/* QUEZON */}
        <div className='theme-transition' id='packages'>
                <img src={herbal_trans} alt='not available' id='water' ></img>
            </div>

            <section className='parallax' id='quezonPackage'>
                <div className='parallax-inner'>
                    <img src={kabanhawan} alt='not available' id='kabanhawanPackage' className='carousel-content'></img>
                        <div className='description-box kabanhawan-desc'>
                            <div className='package-wrapper desc-wrapper'>
                                <h3>ABOUT QUEZON PROVINCE</h3>
                                <p>Quezon province is home to Mount Banahaw, a revered natural and spiritual site known for its sacred trails and mystical beauty. The Kabanhawan Package—named from “Banahaw” and “Ka” (meaning companion or togetherness)—offers a shared journey through nature and spirit. Rooted in local culture and ancestral wisdom, this package invites guests to experience wellness through connection, reflection, and community.</p>
                            </div>
                            <div className='package-wrapper highlights-wrapper'>
                                <h3>Key Highlights</h3>
                                <ul>
                                    <li>Trek the sacred Banahaw trails with guided storytelling that brings local folklore and ancestral knowledge to life.</li>
                                    <li>Restore balance through yoga, water meditation, forest bathing, and traditional hilot healing.</li>
                                    <li>Enjoy calming tea tasting sessions that promote reflection and mindfulness.</li>
                                    <li>Engage in community-centered activities that nurture connection and shared growth.</li>
                                    <li>Embrace “Kabanhawan” as a holistic wellness journey that honors nature, culture, and collective healing.</li>
                                </ul>
                            </div>
                            
                        </div>
                </div>  
            </section>
        </> 

    );
}

export default Content;