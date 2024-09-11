const Reservation = require('../models/reservationModel');

exports.createReservation = async (req, res) => {
  try {
    const { name, email, date, time, guests } = req.body;

    const newReservation = new Reservation({
      name,
      email,
      date,
      time,
      guests,
    });

    await newReservation.save();
    res.status(201).json({ message: 'Reservation created successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create reservation' });
  }
};
