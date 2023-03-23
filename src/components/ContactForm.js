import React from "react";

import "../styles/ContactForm.css";

import { useAppState } from "../providers/app-state";

export default function ContactForm() {
  const { formData, setFormData } = useAppState();
  console.log(formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <>
      <div className="form-container">
        <h2>
          <span>[</span> Contact us <span>]</span>
        </h2>
        <hr />

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-input-group">
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="form-input"
              id="email"
              onChange={handleChange}
            />
          </div>

          <div className="form-input-group">
            <label htmlFor="email" id="email-label">
              Email:
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="form-input"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-textarea-group">
            <label htmlFor="textarea">Message:</label>
            <textarea
              name="message"
              placeholder="Write your message"
              className="form-input"
              rows="5"
              id="contact-textarea"
              onChange={handleChange}
            />
          </div>

          <button id="submit-btn">Send</button>
        </form>
      </div>
    </>
  );
}
