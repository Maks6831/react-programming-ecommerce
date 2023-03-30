import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import "../styles/ContactForm.css";

import { useAppState } from "../providers/app-state";

export default function ContactForm() {
  const { formData, setFormData } = useAppState();
  const { success, setSuccess } = useAppState();
  const { isHiddenForm, setIsHiddenForm } = useAppState();
  const { isHiddenFeedback, setIsHiddenFeedback } = useAppState();
  const { h2Text, setH2Text } = useAppState();

  // Track formData input (on each keystroke)
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  let userName = "";

  // When the form is submitted, data are handled using web3forms and ByteBazaar receives an email with the formData
  // after submission, the user can see a confirmation of submission
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
      .then(async (data) => {
        setSuccess(true);
        setIsHiddenForm(!isHiddenForm);
        await setIsHiddenFeedback(!isHiddenFeedback);

        setTimeout(() => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            name: "",
            email: "",
            message: "",
          }));
        }, 5000);

        return data;
      })
      .then((data) => {
        setH2Text(`Hello ${userName}`);
      })
      .catch((err) => console.log(err));
  };

  const hideFeedback = () => {
    setIsHiddenFeedback(!isHiddenFeedback);
    setIsHiddenForm(!isHiddenForm);
    setH2Text("Contact us");
  };

  // Form animation
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="form-container basic-shadow" data-aos="fade-down">
      <h2>
        <span>[</span> {success ? h2Text : "Contact Us"} <span>]</span>
      </h2>

      <hr />
      <form
        className={isHiddenForm ? "hidden" : "form flex-col"}
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
        <div className="form-textarea-group flex-col">
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
      </form>
      {success && (
        <div
          className={
            isHiddenFeedback ? "hidden" : "form-feedback-card flex-col"
          }
        >
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
