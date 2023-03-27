import React from "react";

import "../styles/ContactForm.css";

import { useAppState } from "../providers/app-state";

export default function ContactForm() {
  const { formData, setFormData } = useAppState();
  const { success, setSuccess } = useAppState();
  const { isHiddenForm, setIsHiddenForm } = useAppState();
  const { isHiddenFeedback, setIsHiddenFeedback } = useAppState();
  const { h2Text, setH2Text } = useAppState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  let userName = "";
  const handleSubmit = (event) => {
    event.preventDefault();

    userName = formData.name;
    const data = JSON.stringify(formData);
    setH2Text(`Hello ${userName}`);

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
        setIsHiddenForm(!isHiddenForm);
        setIsHiddenFeedback(!isHiddenFeedback);

        setTimeout(() => {
          setH2Text(`Hello ${userName}`);
          setFormData((prevFormData) => ({
            ...prevFormData,
            name: "",
            email: "",
            message: "",
          }));
        }, 5000);

        // setTimeout(() => {
        //   setSuccess(false);
        // }, 10000);
      })
      .catch((err) => console.log(err));
  };

  const hideFeedback = () => {
    setIsHiddenFeedback(!isHiddenFeedback);
    setIsHiddenForm(!isHiddenForm);
    setH2Text("Contact us");
  };

  return (
    <section className="form-container">
      <h2>
        <span>[</span> {h2Text} <span>]</span>
      </h2>
      <hr />

      <form
        className={isHiddenForm ? "hidden" : "form"}
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
        <div className={isHiddenFeedback ? "hidden" : "form-feedback-card"}>
          <button
            id="clear-feedback"
            aria-label="Close feedback"
            onClick={hideFeedback}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <p id="form-feedback">
            Thank you for reaching out to us. We'll respond to your inquiry
            within the next 48 hours. Feel free to browse our selection of
            products in the meantime. We're sure you'll find something you love.
          </p>
        </div>
      )}
    </section>
  );
}
