import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { LocationNavBar, NavBar } from './NavBar';
import Modal from 'react-modal';
import restaurant from './rest.png';
import LoginSignUp from './LoginSignUp'; // Import the correct LoginSignUp component
import ReservationTable from './ReservationTable';
import Menu from './Menu'; // Importing the Menu component
import Service from './Service';

const Gallery = lazy(() => import('./Gallery'));

Modal.setAppElement('#root');

// Common Layout Component
const Layout = ({ children }) => (
  <>
    <LocationNavBar />
    <NavBar />
    {children}
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p>Email: info@abcrestaurant.com</p>
          <p>Phone: +94 071881921</p>
          <p>Address: Jaffna Clocktower Road</p>
          <p>Address: Kodikamam Junction</p>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/menu">Menu</Link></li> {/* Added Menu link */}
            <li><Link to="/reservation">Reservations</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section location-map">
          <h3>Our Location</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509389!2d144.95565131531668!3d-37.81721497975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1b4c2a1%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633643639643!5m2!1sen!2sus"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="footer-section legal">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/cookies">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  </>
);

const HomeContent = () => (
  <>
    {/* Home Page Content */}
    <section id="home" className="hero">
      <div className="hero-content">
        <p>
          Step in hungry, leave happy
          <br />
          Welcome to our table at ABC Restaurant.
        </p>
        <Link to="/reservation">
          <button>Reservation</button>
        </Link>
      </div>
    </section>

    <section id="menu" className="menu">
      <h2>Our Specials</h2>
      <div className="menu-items">
        <div className="pasta">
          <h3>Delicious Pasta</h3>
          <p>A classic Italian dish made with love.</p>
        </div>
        <div className="grilled">
          <h3>Grilled Steak</h3>
          <p>Perfectly grilled steak served with sides.</p>
        </div>
        <div className="biryani">
          <h3>Biryani</h3>
          <p>Biryani dreams and flavorful realities on the plate.</p>
        </div>
      </div>
    </section>

    <section id="about" className="about">
      <h2>Welcome to our restaurant</h2>
      <div className="about-content">
        <img src={restaurant} className="abcimg" alt="ABC Restaurant" />
        <p>
          Welcome to ABC Restaurant, where tradition meets modern taste in the heart of Jaffna and Kodikamam. Our journey began with a simple vision: to create a welcoming space where food lovers can indulge in authentic flavors, experience warm hospitality, and feel at home with every meal. With a deep-rooted passion for culinary excellence, we have grown into a beloved spot for locals and travelers alike.
          <br />
          <br />
          Located in the vibrant cities of Jaffna and Kodikamam, our restaurant reflects the rich cultural heritage and unique tastes of Northern Sri Lanka. We take pride in serving a diverse menu that celebrates both traditional recipes and contemporary dishes, all crafted with the freshest local ingredients.
        </p>
      </div>
    </section>
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeContent />
              <section id="reservation">
                <ReservationTable />
              </section>
            </Layout>
          }
        />

        <Route
          path="/reservation"
          element={
            <Layout>
              <section id="reservation">
                <ReservationTable />
              </section>
            </Layout>
          }
        />

        <Route
          path="/gallery"
          element={
            <Layout>
              <Suspense fallback={<div>Loading...</div>}>
                <Gallery />
              </Suspense>
            </Layout>
          }
        />

        {/* Added Menu Route */}
        <Route
          path="/menu"
          element={
            <Layout>
              <Menu />
            </Layout>
          }
        />
         <Route
          path="/service"
          element={
            <Layout>
              <Service />
            </Layout>
          }
        />

        {/* Login and Signup Route */}
        <Route
          path="/login-signup"
          element={<LoginSignUp />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
