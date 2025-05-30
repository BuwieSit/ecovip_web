import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '../../components/assets/global.css';
import './content.css';
import water_trans from '../../components/assets/water_trans.png';
import beans_trans from '../../components/assets/beans_trans.png';
import bush_trans from '../../components/assets/bush_trans.png';
import herbal_trans from '../../components/assets/herbal_trans.png';
import kapwa from '../../components/assets/Tour Package/kapwa.png'
import kadalisayan from '../../components/assets/Tour Package/kadalisayan.png'
import kalikhasan from '../../components/assets/Tour Package/kalikhasan.png'
import kabanhawan from '../../components/assets/Tour Package/kabanhawan.png'

import amadeo_coffee_1 from '../../components/assets/kapwa_images/amadeo_coffee_1.jpg';
import amadeo_coffee_2 from '../../components/assets/kapwa_images/amadeo_coffee_2.jpg';
import amadeo_coffee_3 from '../../components/assets/kapwa_images/amadeo_coffee_3.jpg';
import amadeo_coffee_4 from '../../components/assets/kapwa_images/amadeo_coffee_4.jpg';

import pagsanjan from '../../components/assets/kadalisayan_images/pagsanjan.jpg'
import isdaan from '../../components/assets/kadalisayan_images/isdaan.jpg'
import isdaan_2 from '../../components/assets/kadalisayan_images/isdaan_2.jpg'
import tacsiyapo from '../../components/assets/kadalisayan_images/tacsiyapo.jpg'
import canoe from '../../components/assets/kadalisayan_images/canoe.jpg'

import taktak from '../../components/assets/kalikhasan_images/taktak.jpg';
import masungi from '../../components/assets/kalikhasan_images/masungi.jpg';
import masungi_2 from '../../components/assets/kalikhasan_images/masungi_2.jpg';
import masungi_3 from '../../components/assets/kalikhasan_images/masungi_3.jpg';
import firefly from '../../components/assets/kalikhasan_images/firefly.jpg';
import trek from '../../components/assets/kalikhasan_images/trek.jpg';

import banahaw_1 from '../../components/assets/kabanhawan_images/banahaw_1.jpg';
import banahaw_2 from '../../components/assets/kabanhawan_images/banahaw_2.webp';
import stalucia from '../../components/assets/kabanhawan_images/stalucia.jpg';
import stalucia_2 from '../../components/assets/kabanhawan_images/stalucia_2.jpg';
function Content() {

    return(
        <>
           {/* CAVITE */}
            <div className='theme-transition' id='packages'>
                <img src={beans_trans} alt='not available' id='beans' ></img>
            </div>

            <section className='parallax' id='cavitePackage'>
                <div className='parallax-inner'>

                    <div className='image-carousel cavite-carousel'>
                        <Carousel controls={false} indicators={false} interval={3000} pause={false} wrap={true}>
                            <Carousel.Item>
                                <img src={amadeo_coffee_1} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Amadeo Artisano Coffee Farm</p>
                                <a class='sourceLink' href='https://www.facebook.com/profile.php?id=100072345464446'><sub>source: Amadeo Artisano Coffee Farm Facebook page</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                             <Carousel.Item>
                                <img src={amadeo_coffee_2} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Amadeo Artisano Coffee Farm</p>
                                <a class='sourceLink' href='https://www.facebook.com/profile.php?id=100072345464446'><sub>source: Amadeo Artisano Coffee Farm Facebook page</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                             <Carousel.Item>
                                <img src={amadeo_coffee_3} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Amadeo Artisano Coffee Farm</p>
                                <a class='sourceLink' href='https://www.facebook.com/profile.php?id=100072345464446'><sub>source: Amadeo Artisano Coffee Farm Facebook page</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src={amadeo_coffee_4} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Amadeo Artisano Coffee Farm</p>
                                <a class='sourceLink' href='https://www.facebook.com/profile.php?id=100072345464446'><sub>source: Amadeo Artisano Coffee Farm Facebook page</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                        </Carousel>
                    </div>

                    <div className='container-wrapper'>
                        <img src={kapwa} alt='not available' id='kapwaPackage' className='packages-content'></img>
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
                </div>
            </section>

            {/*LAGUNA - BATANGAS*/}
            <div className='theme-transition' id='packages'>
                <img src={water_trans} alt='not available' id='water' ></img>
            </div>

            <section className='parallax' id='lagunaBatPackage'>
                <div className='parallax-inner'>
                    
                    <div className='image-carousel lagunaBat-carousel'>
                        <Carousel controls={false} indicators={false} interval={2000} pause={false} wrap={true}>
                            <Carousel.Item>
                                <img src={isdaan} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Isdaan Floating Restaurant</p>
                                <a class='sourceLink' href='https://eyashee.wordpress.com/2011/11/03/tacsiyapo/'><sub>source: Eyashee Wordpress</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                             <Carousel.Item>
                                <img src={isdaan_2} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Isdaan Floating Restaurant</p>
                                <a class='sourceLink' href='https://eyashee.wordpress.com/2011/11/03/tacsiyapo/'><sub>source: Eyashee Wordpress</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                             <Carousel.Item>
                                <img src={tacsiyapo} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Isdaan Floating Restaurant</p>
                                <a class='sourceLink' href='https://eyashee.wordpress.com/2011/11/03/tacsiyapo/'><sub>source: Eyashee Wordpress</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src={pagsanjan} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Pagsanjan Falls</p>
                                <a class='sourceLink' href='https://www.funinthephilippines.com/pagsanjan-falls-laguna/'><sub>source: Fun In The Philippines</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src={canoe} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Pagsanjan Falls (Canoe Riding)</p>
                                <a class='sourceLink' href='https://www.agoda.com/activities/detail/ph/manila/pagsanjan-falls-adventure?cid=1844104'><sub>source: Agoda</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                        </Carousel>
                    </div>

                    <div className='container-wrapper'>
                        <img src={kadalisayan} alt='not available' id='kadalisayanPackage' className='packages-content'></img>
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
                </div>
            </section>
        
        {/* RIZAL */}
        <div className='theme-transition' id='packages'>
                <img src={bush_trans} alt='not available' id='water' ></img>
            </div>

            <section className='parallax' id='rizalPackage'>
                <div className='parallax-inner'>

                    <div className='image-carousel lagunaBat-carousel'>
                        <Carousel controls={false} indicators={false} interval={2000} pause={false} wrap={true}>
                            <Carousel.Item>
                                <img src={taktak} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Hinulugang Taktak</p>
                                <a class='sourceLink' href='https://shoestringdiary.wordpress.com/tag/antipolo/'><sub>source: The Shoestring Diaries</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                             <Carousel.Item>
                                <img src={masungi} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Masungi Georeserve</p>
                                <a class='sourceLink' href='https://www.facebook.com/masungigeoreserve'><sub>source: Masungi Georeserve Facebook</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                             <Carousel.Item>
                                <img src={masungi_2} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Masungi Georeserve</p>
                                <a class='sourceLink' href='https://www.facebook.com/masungigeoreserve'><sub>source: Masungi Georeserve Facebook</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src={masungi_3} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Masungi Georeserve</p>
                                <a class='sourceLink' href='https://www.facebook.com/masungigeoreserve'><sub>source: Masungi Georeserve Facebook</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                            <Carousel.Item>
                                <img src={trek} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Masungi Georeserve</p>
                                <a class='sourceLink' href='https://www.facebook.com/masungigeoreserve'><sub>source: Masungi Georeserve Facebook</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src={firefly} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Masungi Georeserve</p>
                                <a class='sourceLink' href='https://www.facebook.com/masungigeoreserve'><sub>source: Masungi Georeserve Facebook</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                        </Carousel>
                    </div>

                    <div className='container-wrapper'>
                        <img src={kalikhasan} alt='not available' id='kalikhasanPackage' className='packages-content'></img>
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
                </div>
            </section>
        

        {/* QUEZON */}
        <div className='theme-transition' id='packages'>
                <img src={herbal_trans} alt='not available' id='water' ></img>
            </div>

            <section className='parallax' id='quezonPackage'>
                <div className='parallax-inner'>

                    <div className='image-carousel lagunaBat-carousel'>
                        <Carousel controls={false} indicators={false} interval={2000} pause={false} wrap={true}>
                            <Carousel.Item>
                                <img src={banahaw_1} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Mt. Banahaw Trail</p>
                                <a class='sourceLink' href='https://mountains.com.ph/philippines/luzon/region-iv-a-calabarzon/quezon/city-of-tayabas/mount-banahaw'><sub>source: Mountains PH</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                             <Carousel.Item>
                                <img src={banahaw_2} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Mt. Banahaw Trail</p>
                                <a class='sourceLink' href='https://www.alltrails.com/parks/philippines/quezon/mount-banahawsan-cristobal-protected-landscape/photos'><sub>source: AllTrails</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                             <Carousel.Item>
                                <img src={stalucia} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Sta. Lucia Falls</p>
                                <a class='sourceLink' href='https://www.thetravellingfoxes.com/post/sta-lucia-falls-a-hidden-gem-in-dolores-quezon'><sub>source: The Travelling Foxes</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src={stalucia_2} className='carousel-content'></img>
                                <Carousel.Caption>
                                <p id='caption'>Sta. Lucia Falls</p>
                                <a class='sourceLink' href='https://santaluciafalls.com/gallery/'><sub>source: Sta. Lucia Falls website</sub></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </div>

                    <div className='container-wrapper'>
                        <img src={kabanhawan} alt='not available' id='kabanhawanPackage' className='packages-content'></img>
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
                </div>  
            </section>
        </> 

    );
}

export default Content;