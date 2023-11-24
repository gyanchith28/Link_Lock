import React, { useState } from "react";

const CardComponent = ({ heading, description, buttonText, onButtonClick, urlId }) => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData)

  return (
    <div className="card">
      <h2>{heading}</h2>
      <p>{description}</p>
      <input
        type="text"
        id={urlId}
        placeholder="Textbox 1"
        onChange={handleChange}
      />
      <input
        type="password"
        id="password"
        placeholder="Textbox 2"
        onChange={handleChange}
      />
      <button onClick={() => onButtonClick(formData)}>{buttonText}</button>
    </div>
  );
};

export default CardComponent;
