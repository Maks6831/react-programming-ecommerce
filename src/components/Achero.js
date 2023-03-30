import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Achero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="hero">
      <div className="hero-text" data-aos="fade-right">
        <h1 className="flex-child">Meet all of your coding needs</h1>
        <p className="flex-child hero-paragraph">
          Welcome to ByteBazaar, your one-stop shop for all your coding hardware
          needs.
        </p>
      </div>
    </div>
  );
};

export default Achero;
