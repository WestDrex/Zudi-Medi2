import React, { useState } from "react";

import "../Components/Services.css";

const ImageWithWriteup = ({ imageSrc, text, reverse, title }) => {
  return (
    <div className={`writeup-section ${reverse ? "reverse" : ""}`}>
      <img src={imageSrc} alt="Content" className="writeup-image" />
      <div className="writeup-content">
        <p className="writeup-title">{title}</p>
        <p className="writeup-text">{text}</p>
        <a href="#" className="book-now">
          Book now
        </a>
      </div>

      {/* <span></span> */}
    </div>
  );
};

const ImageWriteupPage = () => {
  return (
    <div className="writeup-container">
      <div class="text-with-line">
        <h2 className="feautured-services">Our featured services</h2>
        <span></span>
      </div>

      <ImageWithWriteup
        imageSrc="../src/assets/Images/tratak.png"
        title="Tratak Meditation"
        text="Trataka,a technique used in a meditation practice, is one of the six purification techniques, called shatkarmas, of Hatha yoga. Trataka is a Sanskrit word, which means to gaze. As such, this meditation technique involves starting at a single point of focus. This is typically the flame of a candle, but other objects that may be used include a dot on the wall, an object of worship, a deity, flower, mountain, rising sun or moon. However, a flame is believed to work best. Meditating in this way is believed to energize the ajna (third eye) chakra, which is associated with intuition and wisdom, as well as psychic abilities. Traditionally, it's said that the practice allows the past, present and future to be perceived with equal clarity."
      />
      <ImageWithWriteup
        imageSrc="../src/assets/Images/bowl.png"
        title="Singing Bowl Meditation"
        text="The singing bowl is a metal bowl, struck by a mallet, often used in spiritual or religious settings to invoke meditation or relaxation through the resounding vibrations and pleasant sounds it emanates when played. They can also be used in sound therapy to induce healing and treat various illnesses. The sounds the singing bowls produce are said to create a kind of energy that may center the frequencies of the body, mind and soul. Playing these bowls has also been said to cause the left and right sides of the brain to synchronize together, creating a peace and calm during meditation."
        reverse
      />
      <ImageWithWriteup
        imageSrc="../src/assets/Images/medi.png"
        title="Desi Meditation"
        text="Trataka,a technique used in a meditation practice, is one of the six purification techniques, called shatkarmas, of Hatha yoga. Trataka is a Sanskrit word, which means to gaze. As such, this meditation technique involves starting at a single point of focus. This is typically the flame of a candle, but other objects that may be used include a dot on the wall, an object of worship, a deity, flower, mountain, rising sun or moon. However, a flame is believed to work best. Meditating in this way is believed to energize the ajna (third eye) chakra, which is associated with intuition and wisdom, as well as psychic abilities. Traditionally, it's said that the practice allows the past, present and future to be perceived with equal clarity."
      />
    </div>
  );
};

export default ImageWriteupPage;

// export default function ContentBlock({ imageSrc, text, reverse }) {
//     return (
//       <div className={`content-block ${reverse ? "reverse" : ""}`}>
//         {/* // <div className="content-block"{reverse ? "reverse" : ""}> */}
//         <img src={imageSrc} alt="Content" className="content-image" />
//         <p className="content-text">{text}</p>
//       </div>
//     );
//   }

//export default function ContentBlock(props) {
//   return (
//     <main>
//       <div className="service-heading">
//         <h3>Our featured services</h3>
//         <hr></hr>
//       </div>
//       <div className="content-block">
//         {/* // <div className="content-block"{reverse ? "reverse" : ""}> */}
//         <img
//           src={props.item.imageSrc}
//           alt="Content"
//           className="content-image"
//         />
//         <p className="content-text">{props.item.text}</p>
//       </div>
//     </main>
//   );
// }
