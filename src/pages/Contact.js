import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import ContactForm from "../components/ContactForm";
import "../styles/oldHome.css";
import "../styles/Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="Hero">
        <div className="heroOpacity">
          <h1 id="contact-page-h1" data-aos="fade-right">
            We deliver quality tech
            <br />[ <span>byte by byte</span> ]
          </h1>
        </div>
      </section>
      <section id="contact-section">
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
