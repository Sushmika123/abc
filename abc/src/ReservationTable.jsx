import React, { useState } from 'react';
import './ReservationTable.css';
import ReservationImage from './reser.png';

const ReservationForm = () => {
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setReservationSuccess(true);
        e.target.reset();
        setTimeout(() => {
          setReservationSuccess(false);
        }, 5000);
      } else {
        alert('Reservation failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="reservation-container">
      <div className="form-container">
        <h2>Make a Reservation</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
          <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange} required />
          <button type="submit">Reserve Now</button>
        </form>
        {reservationSuccess && (
          <div className="success-message">
            <p>Reservation Successful! We look forward to serving you.</p>
          </div>
        )}
      </div>
      <div className="image-container">
        <img src={ReservationImage} alt="Restaurant" />
      </div>
    </div>
  );
};

export default ReservationForm;
