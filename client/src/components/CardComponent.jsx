// CardComponent.jsx
import React, { useState } from "react";
import './CardComponent.css';


const CardComponent = ({
  heading,
  description,
  buttonText,
  onButtonClick,
  urlId,
}) => {
  const [formData, setFormData] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleButtonClick = async () => {
    try {
      const res = await onButtonClick(formData);
      console.log("Response from onButtonClick:", res);

      if (res && res.shortenedUrl) {
        setShortenedUrl(res.shortenedUrl);
        setShowPopup(true);
      } else {
        console.error("Lock URL request failed");
      }
    } catch (error) {
      console.error("Error in handleButtonClick:", error);
    }
  };

  return (
    <div className="card">
      <h2 className="sub-heading">{heading}</h2>
      <input
        type="text"
        id={urlId}
        className="input-box"
        placeholder="Enter the URL"
        onChange={handleChange}
      />
      <input
        type="password"
        id="password"
        className="input-box"
        placeholder="Password"
        onChange={handleChange}
      />
      <button className="lock-button" onClick={handleButtonClick}>
        {buttonText}
      </button>
      <p className="unlock-link">{description}</p>

      {showPopup && (
        <div className="popup">
          <h3>Your Lock URL</h3>
          <p>{shortenedUrl}</p>
          <button onClick={handlePopupClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
