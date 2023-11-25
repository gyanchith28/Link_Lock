import React from "react";
import CardComponent from "../components/CardComponent";
import axios from "axios";

export default function Unlock() {
  const handleButtonClick = async (formData) => {
    try {
      const res = await axios.post("/api/unlock", formData);
      console.log(res.data);
      let redirectUrl = res.data.url;
      window.location = redirectUrl;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Unlock Url</h1>
      <CardComponent
        heading="Card Heading for Route 1"
        description="Description for Route 1"
        urlId="shortUrl"
        buttonText="Unlock Url"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
}
