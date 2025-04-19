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

  const images = [
    { src: '/images/church.JPG', caption: 'Orthodox' },
    { src: '/images/bee-frames.jpg', caption: 'Beekeeping' },
    { src: '/images/Mak.jpg', caption: 'Macedonian' },
    { src: '/images/tennis.jpg', caption: 'Sports' },
  ];

  return (
    <div className="get-to-know-me">
      <h2>Get to Know Me</h2>
      <p>Here are some glimpses of my life beyond projects. These pictures are threads that weave together the person I am.</p>
      <div className="pictures-row">
        {images.map((image, index) => (
          <div key={index} className="get-to-know-me-image-wrapper">
            <img
              src={image.src}
              alt={image.caption}
              className="get-to-know-me-image"
              onClick={() => openPopup(image.src)}
            />
            <p className="image-caption">{image.caption}</p>
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
