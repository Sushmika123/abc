import React, { useState } from 'react';
import './Gallery.css';
import Modal from 'react-modal';

import image1 from './restaurant1.jpg';
import image2 from './restaurant2.jpg';
import image3 from './restaurant3.jpg';
import image4 from './restaurant4.jpg';
import image5 from './restaurant5.jpg';
import image6 from './restaurant6.jpg';
import image7 from './restaurant7.jpg';
import image8 from './restaurant8.jpg';
import image9 from './restaurant9.jpg';


Modal.setAppElement('#root');

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h2>ABC Restaurant Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            onClick={() => openModal(image)}
            className="gallery-image"
          />
        ))}
      </div>
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <img src={selectedImage} alt="Selected" className="modal-image" />
        <button onClick={closeModal} className="close-button">Close</button>
      </Modal>
    </div>
  );
};

export default Gallery;
