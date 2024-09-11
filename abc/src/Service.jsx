import React, { useState } from 'react';
import './Service.css';
import eventImage from './event.jpg';   
import takeawayImage from './takeaway.jpg'; 
import dineinImage from './dinein.jpg';   

const Services = () => {
  const [query, setQuery] = useState('');
  const [queries, setQueries] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);
  const [selectedService, setSelectedService] = useState('Event Hosting');

  const handleSubmitQuery = (event) => {
    event.preventDefault();
    if (query.trim()) {
      setQueries([...queries, query]);
      setQuery('');
    }
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();
    if (reviewText.trim()) {
      const newReview = {
        service: selectedService,
        review: reviewText,
        rating: rating
      };
      setReviews([...reviews, newReview]);
      setReviewText('');
      setRating(1); 
    }
  };

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      {/* Services Container */}
      <div className="services-container">
        <div className="service-item" style={{ backgroundImage: `url(${eventImage})` }}>
          <div className="service-content">
            <h3>Event Hosting</h3>
            <p>We offer exceptional event hosting services for weddings, corporate events, and private parties.</p>
          </div>
        </div>

        <div className="service-item" style={{ backgroundImage: `url(${takeawayImage})` }}>
          <div className="service-content">
            <h3>Takeaway</h3>
            <p>Order your meals online and pick them up conveniently on your way home. Fast and fresh, just for you.</p>
          </div>
        </div>

        <div className="service-item" style={{ backgroundImage: `url(${dineinImage})` }}>
          <div className="service-content">
            <h3>Dine-in</h3>
            <p>Experience a warm and comfortable atmosphere, with freshly prepared meals served directly to your table.</p>
          </div>
        </div>
      </div>

      {/* Queries Container */}
      <div className="query-section">
        <h3>Have any Questions or Queries?</h3>
        <form onSubmit={handleSubmitQuery} className="query-form">
          <label htmlFor="query-text">Your Query:</label>
          <textarea
            id="query-text"
            name="userQuery"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Write your query here..."
            rows="4"
            style={{ width: '100%', padding: '10px' }}
          />
          <button type="submit" style={{ padding: '10px 20px', marginTop: '10px', backgroundColor: '#800000', color: '#fff' }}>
            Submit Query
          </button>
        </form>

        <div className="queries-display">
          <h4>Submitted Queries:</h4>
          {queries.length > 0 ? (
            <ul>
              {queries.map((q, index) => (
                <li key={index} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#000', borderRadius: '8px' }}>
                  {q}
                </li>
              ))}
            </ul>
          ) : (
            <p>No queries submitted yet.</p>
          )}
        </div>
      </div>

      {/* Review Section */}
      <div className="review-section">
        <h3>Submit a Review</h3>
        <form onSubmit={handleSubmitReview} className="review-form">
          <label htmlFor="service">Service:</label>
          <select
            id="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
          >
            <option value="Event Hosting">Event Hosting</option>
            <option value="Takeaway">Takeaway</option>
            <option value="Dine-in">Dine-in</option>
          </select>

          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num} Star{num > 1 ? 's' : ''}</option>
            ))}
          </select>

          <label htmlFor="review-text">Your Review:</label>
          <textarea
            id="review-text"
            name="userReview"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review here..."
            rows="4"
            style={{ width: '100%', padding: '10px' }}
          />
          <button type="submit" style={{ padding: '10px 20px', marginTop: '10px', backgroundColor: '#800000', color: '#000' }}>
            Submit Review
          </button>
        </form>

        <div className="reviews-display">
          <h4>Customer Reviews:</h4>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((review, index) => (
                <li key={index} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
                  <strong>{review.service}</strong> - {review.rating} Star{review.rating > 1 ? 's' : ''}<br />
                  {review.review}
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews submitted yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
