import { useLocation } from 'react-router-dom';

export default function Book() {
    const location = useLocation();
    const packageName = location.state?.packageName || "Custom Package";

    return (
        <div className="book-container">
            <h2>Booking Page</h2>
            {packageName ? (
                <p>You are inquiring about: <strong>{packageName}</strong></p>
            ) : (
                <p>No package selected.</p>
            )}
        </div>

    );
}
