import React, { useState } from "react";

import "./index.css";
//  import Offers from "./Components/Offers.jsx";
import Home from "./Components/Home.jsx";
//import contentData from "./contentData.jsx";
import ImageWriteupPage from "./Components/Services.jsx";
import ImageGallery from "./Components/Offers.jsx";
import Footer from "./Components/Footer.jsx";

export default function App() {
  // const offeredServices = contentData.map((locs, index) => {
  //   return <ContentBlock key={index} item={locs} />;
  // });

  return (
    <div className="App">
      <Home />
      <ImageGallery />
      {/* <Offers /> */}
      {/* <section>{offeredServices}</section> */}
      <ImageWriteupPage />
      <Footer />
    </div>
  );
}
