import '../../components/assets/global.css';
import './createStyle.css';
import '../../components/assets/global.css';


function Create() {

    return (
        <>
            <div className='create-wrapper'>
                <table className='packages kapwa-package'>
                    <thead>
                        <tr>
                            <td>Kapwa Package</td>
                        </tr>
                    </thead>
                    <tr>
                        <td>Coffee Aromatherapy Session</td>
                    </tr>
                    <tr>
                        <td>Farm Connection Walk</td>
                    </tr>
                    <tr>
                        <td>Mindful Coffee Brewing & Tasting</td>
                    </tr>
                    <tr>
                        <td>Coffee Scrub Session</td>
                    </tr>
                    <tr>
                        <td>Coffee Painting (Creative Calm)</td>
                    </tr>
                    <tr>
                        <td>Pakikipag-Kapwa Circle + Baybayin Affirmation</td>
                    </tr>
                </table>

                <table className='packages kadalisayan-package'>
                    <thead>
                        <tr>
                            <td>Kadalisayan Package</td>
                        </tr>
                    </thead>
                    <tr>
                        <td>Canoe Ride / Bamboo Rafting at Pagsanjan Falls</td>
                    </tr>
                    <tr>
                        <td>Tacsiyapo Wall and Reflection Activity</td>
                    </tr>
                    <tr>
                        <td>Fish Feeding </td>
                    </tr>
                    <tr>
                        <td>Outdoor Painting</td>
                    </tr>
                    <tr>
                        <td>Arnis / Yoga Meditation</td>
                    </tr>
                    <tr>
                        <td>Pakikipag-kapwa + Baybayin Affirmation at Wakim Lake</td>
                    </tr>
                </table>

                <table className='packages kalikhasan-package'>
                    <thead>
                        <tr>
                            <td>Kalikhasan Package</td>
                        </tr>
                    </thead>
                    <tr>
                        <td>Outdoor Painting Meditation using Natural Dye</td>
                    </tr>
                    <tr>
                        <td>Hinulugang Taktak Guided Waterfall Meditation and Cleansing</td>
                    </tr>
                    <tr>
                        <td>Legacy Trail and Forest Bathing at Masungi Georeserve</td>
                    </tr>
                    <tr>
                        <td>Pakikipagkapwa Circle and Reflection + Baybayin Affirmation and Tea tasting</td>
                    </tr>
                    <tr>
                        <td>Firefly Watching</td>
                    </tr>

                </table>

                <table className='packages kabanhawan-package'>
                    <thead>
                        <tr>
                            <td>Kabanhawan Package</td>
                        </tr>
                    </thead>
                    <tr>
                        <td>Guided Trek and Banahaw Folklore Storytelling</td>
                    </tr>
                    <tr>
                        <td>Guided Yoga Session</td>
                    </tr>
                    <tr>
                        <td>Forest Bathing</td>
                    </tr>
                    <tr>
                        <td>Sta. Lucia Falls Bathing and Water Meditation</td>
                    </tr>
                    <tr>
                        <td>Traditional Hilot Healing Session + Tea Tasting</td>
                    </tr>
                    <tr>
                        <td>Pakikipag-Kapwa Circle + Baybayin Affirmation</td>
                    </tr>
                </table>


                <table className='diy-package packages'>
                    <thead>
                        <tr>
                            <td colSpan={'2'}>Your Package</td>
                        </tr>
                    </thead>
                        <tr><td>This my package</td><td>Price</td></tr>



                </table>
            </div>
            
        </>

    );
}

export default Create;