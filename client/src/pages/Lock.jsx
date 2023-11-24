import React from "react";
import CardComponent from "../components/CardComponent";

export default function Lock() {
  const handleButtonClick = async (formData) => {
    const res = await fetch("/api/generate", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Lock Url</h1>
      <CardComponent
        heading="Card Heading for Route 1"
        description="Description for Route 1"
        urlId='redirectUrl'
        buttonText="Lock Url"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
}
