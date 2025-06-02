import { useState, useRef, act } from 'react';
import '../../components/assets/global.css';
import './createStyle.css';
import trash from '../../components/assets/trash.png'

const activitiesData = [
  { name: 'Coffee Aromatherapy Session', price: 3000, package: 'Kapwa' },
  { name: 'Farm Connection Walk', price: 799, package: 'Kapwa' },
  { name: 'Mindful Coffee Brewing & Tasting', price: '', package: 'Kapwa' },
  { name: 'Coffee Scrub Session', price: 1000, package: 'Kapwa' },
  { name: 'Coffee Painting (Creative Calm)', price: 150, package: 'Kapwa' },

  { name: 'Canoe Ride / Bamboo Rafting at Pagsanjan Falls', price: 800, package: 'Kadalisayan' },
  { name: 'Tacsiyapo Wall and Reflection Activity', price: 250, package: 'Kadalisayan' },
  { name: 'Fish Feeding', price: 150, package: 'Kadalisayan' },
  { name: 'Outdoor Painting', price: 300, package: 'Kadalisayan' },
  { name: 'Arnis / Yoga Meditation', price: 400, package: 'Kadalisayan' },
  { name: 'Pakikipag-kapwa + Baybayin Affirmation at Wakim Lake', price: 250, package: 'Kadalisayan' },

  { name: 'Outdoor Painting Meditation using Natural Dye', price: 300, package: 'Kalikhasan' },
  { name: 'Hinulugang Taktak Guided Waterfall Meditation and Cleansing', price: 500, package: 'Kalikhasan' },
  { name: 'Legacy Trail and Forest Bathing at Masungi Georeserve', price: 750, package: 'Kalikhasan' },
  { name: 'Pakikipagkapwa Circle and Reflection + Baybayin Affirmation and Tea tasting', price: 300, package: 'Kalikhasan' },
  { name: 'Firefly Watching', price: 450, package: 'Kalikhasan' },

  { name: 'Guided Trek and Banahaw Folklore Storytelling', price: 600, package: 'Kabanhawan' },
  { name: 'Guided Yoga Session', price: 350, package: 'Kabanhawan' },
  { name: 'Forest Bathing', price: 400, package: 'Kabanhawan' },
  { name: 'Sta. Lucia Falls Bathing and Water Meditation', price: 500, package: 'Kabanhawan' },
  { name: 'Traditional Hilot Healing Session + Tea Tasting', price: 450, package: 'Kabanhawan' },
];

const packageMap = {
    'Kapwa': [
        'Coffee Aromatherapy Session',
        'Farm Connection Walk',
        'Mindful Coffee Brewing & Tasting',
        'Coffee Scrub Session',
        'Coffee Painting (Creative Calm)'
    ],
    'Kadalisayan': [
        'Canoe Ride / Bamboo Rafting at Pagsanjan Falls',
        'Tacsiyapo Wall and Reflection Activity',
        'Fish Feeding',
        'Outdoor Painting',
        'Arnis / Yoga Meditation',
        'Pakikipag-kapwa + Baybayin Affirmation at Wakim Lake',
        'Isdaan' // Not in activitiesData label, just a marker for logic
    ],
    'Kalikhasan': [
        'Outdoor Painting Meditation using Natural Dye',
        'Hinulugang Taktak Guided Waterfall Meditation and Cleansing',
        'Legacy Trail and Forest Bathing at Masungi Georeserve',
        'Pakikipagkapwa Circle and Reflection + Baybayin Affirmation and Tea tasting',
        'Firefly Watching'
    ],
    'Kabanhawan': [
        'Guided Trek and Banahaw Folklore Storytelling',
        'Guided Yoga Session',
        'Forest Bathing',
        'Sta. Lucia Falls Bathing and Water Meditation',
        'Traditional Hilot Healing Session + Tea Tasting',
        'Pakikipag-Kapwa Circle + Baybayin Affirmation'
    ]
};

const allowedCrossCombinations = [
    ['Coffee Aromatherapy Session', 'Pakikipag-kapwa + Baybayin Affirmation at Wakim Lake'], // Kapwa ↔ Kadalisayan
    ['Tacsiyapo Wall and Reflection Activity', 'Sta. Lucia Falls Bathing and Water Meditation'], // Kadalisayan ↔ Kabanhawan
    ['Hinulugang Taktak Guided Waterfall Meditation and Cleansing', 'Guided Trek and Banahaw Folklore Storytelling'], // Kalikhasan ↔ Kabanhawan
    ['Legacy Trail and Forest Bathing at Masungi Georeserve', 'Guided Trek and Banahaw Folklore Storytelling'] // Kalikhasan ↔ Kabanhawan
];


function Create() {
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [toastMessage, setToastMessage] = useState('');
    const toastTimeoutRef = useRef(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [activePackage, setActivePackage] = useState(null);

    const getActivityPackage = (activityName) => {
        for (const [pkg, activities] of Object.entries(packageMap)) {
            if (activities.includes(activityName)) return pkg;
        }
        return null;
    };

    const isAllowedCombination = (newActivity, selectedActivities) => {
    return allowedCrossCombinations.some(pair => {
        return pair.includes(newActivity) && selectedActivities.some(sel => pair.includes(sel.name));
        });
    };

    const isSelectable = (activityName) => {
        const activityPkg = getActivityPackage(activityName);
        const selectedPkgs = new Set(selectedActivities.map(a => getActivityPackage(a.name)));

        if (selectedActivities.length === 0) return true;
        if (selectedPkgs.has(activityPkg)) return true;
        return isAllowedCombination(activityName, selectedActivities);
    };

    const handleSelect = (activityName) => {
        const alreadyAdded = selectedActivities.find(item => item.name === activityName);
        if (alreadyAdded) return;

        const activity = activitiesData.find(item => item.name === activityName);
        if (!activity) return;

        const newActivityPackage = getActivityPackage(activityName);
        const selectedPackages = new Set(selectedActivities.map(a => getActivityPackage(a.name)));

        if (
            selectedActivities.length === 0 || 
            selectedPackages.has(newActivityPackage) || 
            isAllowedCombination(activityName, selectedActivities)
        ) {
            setSelectedActivities([...selectedActivities, activity]);
            showToast(`${activity.name} added`);
        } else {
            showToast(`Cannot mix with selected package`);
        }
    };
        const showToast = (activityName) => {

            if (toastTimeoutRef.current) {
                clearTimeout(toastTimeoutRef.current)
            }

            setToastMessage(activityName);

            toastTimeoutRef.current = setTimeout(() => {
                setToastMessage('');
            }, 2500);

        };


    const handleRemove = (activityName) => {
        setSelectedActivities(selectedActivities.filter(item => item.name !== activityName));
        showToast(activityName + " removed") ;
    };

    const handleRemoveAll = () => {
        setSelectedActivities([]);
        setActivePackage(null); // allow selection again
        setShowConfirmModal(false);
        showToast("All activities removed");
    };


    const renderTable = (title, activityNames, className) => (
        <table className={`packages ${className}`}>
            <thead>
            <tr><td>{title}</td></tr>
            </thead>
            <tbody>
            {activityNames.map((name, idx) => {
                const activity = activitiesData.find(a => a.name === name);
                const isSelected = selectedActivities.find(item => item.name === name);
                const isDisabled = activePackage && activity?.package !== activePackage;

                return (
                <tr
                     key={idx}
                        className={`${selectedActivities.find(item => item.name === name) ? 'selected-activity' : ''} ${!isSelectable(name) ? 'disabled-activity' : ''}`}
                        onClick={() => isSelectable(name) && handleSelect(name)}
                    style={{ cursor: isDisabled ? 'not-allowed' : 'pointer', opacity: isDisabled ? 0.4 : 1 }}
                >
                    <td>
                    {name}
                    <br />
                    <span style={{ fontSize: '12px', color: 'black' }}>
                        ₱{(activity?.price || 0).toLocaleString()}
                    </span>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
    );


    const totalPrice = selectedActivities.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
        
            <div className='create-wrapper'>

                {toastMessage && (
                    <div className="toast-message">
                        {toastMessage}
                    </div>
                )}

                {renderTable('Kapwa Package', [
                    'Coffee Aromatherapy Session',
                    'Farm Connection Walk',
                    'Mindful Coffee Brewing & Tasting',
                    'Coffee Scrub Session',
                    'Coffee Painting (Creative Calm)'
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

 
            </div>
            
            <div className='diy-container'>
                               <table className='diy-package packages'>
                    <thead>
                        <tr>
                            <td>Activity</td>
                            <td>Price (₱)</td>
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
                            <>
                                {selectedActivities.map((activity, index) => (
                                    <tr key={index} onClick={() => handleRemove(activity.name)} className='selected-activity'>
                                        <td>{activity.name}</td>
                                        <td>{activity.price.toLocaleString()}</td>
                                    </tr>
                                ))}
                                <tr style={{ fontWeight: 'bold', borderTop: '2px solid #000' }}>
                                    <td>Total</td>
                                    <td>₱{totalPrice.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td colSpan='2' style={{textAlign: "center", fontSize: "20px"}}>Book now</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
                {showConfirmModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <p>Are you sure you want to remove all selected activities?</p>
                            <div className="modal-buttons">
                                <button onClick={handleRemoveAll}>Yes, remove all</button>
                                <button onClick={() => setShowConfirmModal(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )};

                <button className='remove-all-btn' onClick={() => setShowConfirmModal(true)}>
                    <img src={trash}></img>
                    <p>Remove all</p>
                </button>
            </div>
        </>
    );
}

export default Create;
