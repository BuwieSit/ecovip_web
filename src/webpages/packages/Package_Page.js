import '../../components/assets/global.css';
import './package_style.css';
import amadeo_coffee_3 from '../../components/assets/kapwa_images/amadeo_coffee_3.jpg';
import isdaan from '../../components/assets/kadalisayan_images/isdaan.jpg';
import masungi_2 from '../../components/assets/kalikhasan_images/masungi_2.jpg';
import stalucia from '../../components/assets/kabanhawan_images/stalucia.jpg';

export default function Package_Page() {
    
    return(
        <>
            <div className='top'>
                <h1>A home away from home</h1>
                <p>A journey home, guided by the wisdom of the senses and the embrace of nature.</p>
                <button className='top-button'><a href='#packages'>Go to Experiences</a></button>

            </div>

            <div className='package-section'>
                <h3 className='package-title'>Wellness experiences</h3>
                <div className='packages-container' id='packages'>
                    <div className='package-card'>
                        <img src={amadeo_coffee_3} alt='image'></img>
                        <div className='text-wrapper'>
                            <h3>Kapwa Package - Amadeo, Cavite</h3>
                            <p>Explore Amadeo through its famous coffee. Enjoy relaxing activities like tasting, smelling, and learning about coffee—all while connecting with the local community.</p>
                            <button className='inquire-btn'>Inquire Experience</button>
                        </div>
                        
                        
                    </div>

                    <div className='package-card'>
                        <img src={isdaan} alt='image'></img>
                        <div className='text-wrapper'>
                            <h3>Kadalisayan - Laguna | Batangas</h3>
                            <p>Explore Amadeo through its famous coffee. Enjoy relaxing activities like tasting, smelling, and learning about coffee—all while connecting with the local community.</p>
                            <button className='inquire-btn'>Inquire Experience</button>
                        </div>
                        
                        
                    </div>
                </div>

                <div className='packages-container'>
                    <div className='package-card'>
                        <img src={masungi_2} alt='image'></img>
                        <div className='text-wrapper'>
                            <h3>Kalikhasan - Rizal</h3>
                            <p>Explore Amadeo through its famous coffee. Enjoy relaxing activities like tasting, smelling, and learning about coffee—all while connecting with the local community.</p>
                            <button className='inquire-btn'>Inquire Experience</button>
                        </div>
                        
                        
                    </div>
                
                    <div className='package-card'>
                        <img src={stalucia} alt='image'></img>

                        <div className='text-wrapper'>
                            <h3>Kabanhawan - Quezon Province</h3>
                            <p>Explore Amadeo through its famous coffee. Enjoy relaxing activities like tasting, smelling, and learning about coffee—all while connecting with the local community.</p>

                            <button className='inquire-btn'>Inquire Experience</button>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
        
        </>
    )
}