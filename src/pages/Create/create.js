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
