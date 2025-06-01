// import React, { useState } from 'react';
// import '../../components/assets/global.css';
// import './createStyle.css';
// import '../../components/assets/global.css';


// function Create() {
//         const [selectedActivities, setSelectedActivities] = useState([]);

//     const addActivity = (activity) => {
//         if (!selectedActivities.includes(activity)) {
//             setSelectedActivities([...selectedActivities, activity]);
//         }
//     };

//     const packages = {
//         "Kapwa Package": [
//             "Coffee Aromatherapy Session",
//             "Farm Connection Walk",
//             "Mindful Coffee Brewing & Tasting",
//             "Coffee Scrub Session",
//             "Coffee Painting (Creative Calm)",
//             "Pakikipag-Kapwa Circle + Baybayin Affirmation"
//         ],
//         "Kadalisayan Package": [
//             "Canoe Ride / Bamboo Rafting at Pagsanjan Falls",
//             "Tacsiyapo Wall and Reflection Activity",
//             "Fish Feeding",
//             "Outdoor Painting",
//             "Arnis / Yoga Meditation",
//             "Pakikipag-kapwa + Baybayin Affirmation at Wakim Lake"
//         ],
//         "Kalikhasan Package": [
//             "Outdoor Painting Meditation using Natural Dye",
//             "Hinulugang Taktak Guided Waterfall Meditation and Cleansing",
//             "Legacy Trail and Forest Bathing at Masungi Georeserve",
//             "Pakikipagkapwa Circle and Reflection + Baybayin Affirmation and Tea tasting",
//             "Firefly Watching"
//         ],
//         "Kabanhawan Package": [
//             "Guided Trek and Banahaw Folklore Storytelling",
//             "Guided Yoga Session",
//             "Forest Bathing",
//             "Sta. Lucia Falls Bathing and Water Meditation",
//             "Traditional Hilot Healing Session + Tea Tasting",
//             "Pakikipag-Kapwa Circle + Baybayin Affirmation"
//         ]
//     };

//     return (
//         <>
//             <div className='create-wrapper'>
//                 <table className='packages kapwa-package'>
//                     <thead>
//                         <tr>
//                             <td>Kapwa Package</td>
//                         </tr>
//                     </thead>
//                     <tr>
//                         <td>Coffee Aromatherapy Session</td>
//                     </tr>
//                     <tr>
//                         <td>Farm Connection Walk</td>
//                     </tr>
//                     <tr>
//                         <td>Mindful Coffee Brewing & Tasting</td>
//                     </tr>
//                     <tr>
//                         <td>Coffee Scrub Session</td>
//                     </tr>
//                     <tr>
//                         <td>Coffee Painting (Creative Calm)</td>
//                     </tr>
//                     <tr>
//                         <td>Pakikipag-Kapwa Circle + Baybayin Affirmation</td>
//                     </tr>
//                 </table>

//                 <table className='packages kadalisayan-package'>
//                     <thead>
//                         <tr>
//                             <td>Kadalisayan Package</td>
//                         </tr>
//                     </thead>
//                     <tr>
//                         <td>Canoe Ride / Bamboo Rafting at Pagsanjan Falls</td>
//                     </tr>
//                     <tr>
//                         <td>Tacsiyapo Wall and Reflection Activity</td>
//                     </tr>
//                     <tr>
//                         <td>Fish Feeding </td>
//                     </tr>
//                     <tr>
//                         <td>Outdoor Painting</td>
//                     </tr>
//                     <tr>
//                         <td>Arnis / Yoga Meditation</td>
//                     </tr>
//                     <tr>
//                         <td>Pakikipag-kapwa + Baybayin Affirmation at Wakim Lake</td>
//                     </tr>
//                 </table>

//                 <table className='packages kalikhasan-package'>
//                     <thead>
//                         <tr>
//                             <td>Kalikhasan Package</td>
//                         </tr>
//                     </thead>
//                     <tr>
//                         <td>Outdoor Painting Meditation using Natural Dye</td>
//                     </tr>
//                     <tr>
//                         <td>Hinulugang Taktak Guided Waterfall Meditation and Cleansing</td>
//                     </tr>
//                     <tr>
//                         <td>Legacy Trail and Forest Bathing at Masungi Georeserve</td>
//                     </tr>
//                     <tr>
//                         <td>Pakikipagkapwa Circle and Reflection + Baybayin Affirmation and Tea tasting</td>
//                     </tr>
//                     <tr>
//                         <td>Firefly Watching</td>
//                     </tr>

//                 </table>

//                 <table className='packages kabanhawan-package'>
//                     <thead>
//                         <tr>
//                             <td>Kabanhawan Package</td>
//                         </tr>
//                     </thead>
//                     <tr>
//                         <td>Guided Trek and Banahaw Folklore Storytelling</td>
//                     </tr>
//                     <tr>
//                         <td>Guided Yoga Session</td>
//                     </tr>
//                     <tr>
//                         <td>Forest Bathing</td>
//                     </tr>
//                     <tr>
//                         <td>Sta. Lucia Falls Bathing and Water Meditation</td>
//                     </tr>
//                     <tr>
//                         <td>Traditional Hilot Healing Session + Tea Tasting</td>
//                     </tr>
//                     <tr>
//                         <td>Pakikipag-Kapwa Circle + Baybayin Affirmation</td>
//                     </tr>
//                 </table>


//                 <table className='diy-package packages'>
//                     <thead>
//                         <tr>
//                             <td colSpan={'2'}>Your Package</td>
//                         </tr>
//                     </thead>
//                         <tr><td>This my package</td><td>Price</td></tr>



//                 </table>
//             </div>
            
//         </>

//     );
// }

// export default Create;

import React, { useState } from 'react';
import '../../components/assets/global.css';
import './createStyle.css';

function Create() {
    const [selectedActivities, setSelectedActivities] = useState([]);

    const handleSelect = (activity) => {
        if (!selectedActivities.includes(activity)) {
            setSelectedActivities([...selectedActivities, activity]);
        }
    };

    const handleRemove = (activity) => {
        setSelectedActivities(selectedActivities.filter(item => item !== activity));
    };

    const renderTable = (title, activities, className) => (
        <table className={`packages ${className}`}>
            <thead>
                <tr>
                    <td>{title}</td>
                </tr>
            </thead>
            <tbody>
                {activities.map((activity, idx) => (
                    <tr
                        key={idx}
                        className={selectedActivities.includes(activity) ? 'selected-activity' : ''}
                        onClick={() => handleSelect(activity)}
                    >
                        <td>{activity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className='create-wrapper'>
            {renderTable('Kapwa Package', [
                'Coffee Aromatherapy Session',
                'Farm Connection Walk',
                'Mindful Coffee Brewing & Tasting',
                'Coffee Scrub Session',
                'Coffee Painting (Creative Calm)',
                'Pakikipag-Kapwa Circle + Baybayin Affirmation'
            ], 'kapwa-package')}

            {renderTable('Kadalisayan Package', [
                'Canoe Ride / Bamboo Rafting at Pagsanjan Falls',
                'Tacsiyapo Wall and Reflection Activity',
                'Fish Feeding',
                'Outdoor Painting',
                'Arnis / Yoga Meditation',
                'Pakikipag-kapwa + Baybayin Affirmation at Wakim Lake'
            ], 'kadalisayan-package')}

            {renderTable('Kalikhasan Package', [
                'Outdoor Painting Meditation using Natural Dye',
                'Hinulugang Taktak Guided Waterfall Meditation and Cleansing',
                'Legacy Trail and Forest Bathing at Masungi Georeserve',
                'Pakikipagkapwa Circle and Reflection + Baybayin Affirmation and Tea tasting',
                'Firefly Watching'
            ], 'kalikhasan-package')}

            {renderTable('Kabanhawan Package', [
                'Guided Trek and Banahaw Folklore Storytelling',
                'Guided Yoga Session',
                'Forest Bathing',
                'Sta. Lucia Falls Bathing and Water Meditation',
                'Traditional Hilot Healing Session + Tea Tasting',
                'Pakikipag-Kapwa Circle + Baybayin Affirmation'
            ], 'kabanhawan-package')}

            <table className='diy-package packages'>
                <thead>
                    <tr>
                        <td colSpan='2'>Your Package</td>
                    </tr>
                </thead>
                <tbody>
                    {selectedActivities.length === 0 ? (
                        <tr>
                            <td colSpan='2' style={{ textAlign: 'center', padding: '20px' }}>
                                No activities selected yet
                            </td>
                        </tr>
                    ) : (
                        selectedActivities.map((activity, index) => (
                            <tr key={index} onClick={() => handleRemove(activity)} className='selected-activity'>
                                <td>{activity}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Create;
