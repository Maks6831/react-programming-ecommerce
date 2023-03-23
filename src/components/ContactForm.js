import React from "react";

import "../styles/ContactForm.css";

export default function ContactForm() {
  return (
    <>
      <div className="form-container">
        <h2>
          <span>[</span> Contact us <span>]</span>
        </h2>
        <hr />
        <form className="form">
          <div className="form-input-group">
            <label htmLfor="name">Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="form-input"
              id="email"
            />
          </div>

          <div className="form-input-group">
            <label htmLfor="email" id="email-label">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-input"
              id="email"
            />
          </div>
          <div className="form-textarea-group">
            <label htmLfor="textarea">Message:</label>
            <textarea
              placeholder="Write your message"
              className="form-input"
              rows="5"
              id="contact-textarea"
            />
          </div>

          <button id="submit-btn">Send</button>
        </form>
      </div>
    </>
  );
}
