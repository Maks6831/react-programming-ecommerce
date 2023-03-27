import React from "react";

import "../styles/ContactForm.css";

import { useAppState } from "../providers/app-state";

export default function ContactForm() {
  const { formData, setFormData } = useAppState();
  const { success, setSuccess } = useAppState();
  const { isHiddenForm, setIsHiddenForm } = useAppState();

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

    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setFormData((prevFormData) => ({
          ...prevFormData,
          name: "",
          email: "",
          message: "",
        }));

        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="form-container">
        <h2>
          <span>[</span> Contact us <span>]</span>
        </h2>
        <hr />

        <form
          className=""
          id="form "
          onSubmit={handleSubmit}
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

          <div className="form-input-group">
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="form-input"
              id="email"
              required
              value={formData.name}
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
              required
              value={formData.email}
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
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button id="submit-btn" aria-label="Send message">
            Send
          </button>
          {/* {success && alert("Thank you for contacting us!😎")} */}
        </form>
        {success && (
          <div id="form-feedback-card">
            <p id="form-feedback">Than</p>
            <button id="clear-feedback" aria-label="Close feedback">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
