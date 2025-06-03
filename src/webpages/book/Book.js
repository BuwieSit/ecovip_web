import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookStyle.css';

export default function Book() {
  const location = useLocation();
  const packageName = location.state?.packageName || "Custom Package";

  const [form, setForm] = useState({
    travelDate: '',
    pax: '',
    fullName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const [paxError, setPaxError] = useState('');
  const today = new Date().toISOString().split('T')[0];

  const isValidPax = (value) => {
    const num = Number(value);
    return (num >= 1 && num <= 2) || (num >= 5 && num <= 10);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'pax') {
      // allow empty input for clearing
      if (value === '') {
        setForm(prev => ({ ...prev, [name]: value }));
        setPaxError('');
        return;
      }

      if (!/^\d+$/.test(value)) return;

      const num = Number(value);

      if (num >= 3 && num < 5) {
        setPaxError('Pax must be 1-2 or 5-10 (no 3 or 4)');
        return;
      }
      if (num > 10) {
        setPaxError('Maximum pax is 10');
        return;
      }

      setPaxError('');
      setForm(prev => ({ ...prev, [name]: value }));
      return;
    }

    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidPax(form.pax)) {
      setPaxError('Pax must be 1-2 or 5-10');
      return;
    }
    alert('Booking submitted!');
    console.log('Booking data:', { packageName, ...form });
  };

  return (
    <div className="booking-page-wrapper">
      <div className="book-container">
        <h2><strong>{packageName}</strong></h2>
        {packageName ? (
          <p></p>
        ) : (
          <p>No package selected.</p>
        )}

        <form onSubmit={handleSubmit} className="booking-form">
          <label>
            Preferred Travel Date:
            <input
              type="date"
              name="travelDate"
              min={today}
              value={form.travelDate}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Pax (1-2 or 5-10):
            <input
              type="number"
              name="pax"
              min="1"
              max="10"
              value={form.pax}
              onChange={handleChange}
              required
              placeholder="Enter number of pax"
            />
            {paxError && <small className="error">{paxError}</small>}
          </label>

          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </label>

          <label>
            Contact Number:
            <input
              type="tel"
              name="contactNumber"
              value={form.contactNumber}
              onChange={handleChange}
              required
              placeholder="+1234567890"
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="email@example.com"
            />
          </label>

          <label>
            Additional Message:
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Any special requests or notes..."
            />
          </label>

          <button type="submit">Submit Booking</button>
        </form>
      </div>
    </div>
  );
}
