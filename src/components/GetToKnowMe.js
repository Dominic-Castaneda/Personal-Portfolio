import React from 'react';
import '../App.css'; // Assuming the styles are in App.css

const GetToKnowMe = () => {
  return (
    <div className="get-to-know-me">
      <h2>Get to Know Me</h2>
      <p>Here are some glimpses of my life beyond coding. These pictures capture my hobbies, travels, and special moments that are important to me.</p>
      <div className="pictures-row">
        <img src="/images/hobby1.jpg" alt="Hobby 1" className="get-to-know-me-image" />
        <img src="/images/hobby2.jpg" alt="Hobby 2" className="get-to-know-me-image" />
        <img src="/images/hobby3.jpg" alt="Hobby 3" className="get-to-know-me-image" />
        <img src="/images/hobby4.jpg" alt="Hobby 4" className="get-to-know-me-image" />
      </div>
    </div>
  );
};

export default GetToKnowMe;
