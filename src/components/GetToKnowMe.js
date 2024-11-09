import React, { useState } from 'react';
import '../App.css';

const GetToKnowMe = () => {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="get-to-know-me">
      <h2>Get to Know Me</h2>
      <p>Here are some glimpses of my life beyond coding. These pictures capture my hobbies, travels, and special moments that are important to me.</p>
      <div className="pictures-row">
        {['/images/bee-frames.jpg', '/images/bee-frames.jpg', '/images/bee-frames.jpg', '/images/bee-frames.jpg'].map((src, index) => (
          <div key={index} className="get-to-know-me-image-wrapper">
            <img
              src={src}
              alt={`Hobby ${index + 1}`}
              className="get-to-know-me-image"
              onClick={() => openPopup(src)}
            />
            <p className="image-caption">Hobby {index + 1}</p>
          </div>
        ))}
      </div>

      {popupImage && (
        <div className="image-popup-overlay visible" onClick={closePopup}>
          <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-popup-close" onClick={closePopup}>
              &times;
            </button>
            <img src={popupImage} alt="Popup" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GetToKnowMe;
