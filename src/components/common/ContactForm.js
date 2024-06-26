// src/ContactForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_n67b4jm",
        "template_spokf6p",
        formData,
        "xyEKRJyRfz-KdCI2a"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.error("FAILED...", err);
      });

    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mt-5 ">
      <p class="d-flex justify-content-center align-items-center"> Or This Form</p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label
            htmlFor="name"
            className="form-label d-flex justify-content-center align-items-center text-white"
          >
            Name
          </label>
          <div class="d-flex">
            <input
              type="text"
              className="form-control"
              id="name"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="form-control"
              id="name"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label d-flex justify-content-center align-items-center text-white"
          >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="message"
            className="form-label d-flex justify-content-center align-items-center text-white"
          >
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button type="submit" className="btn btn-light rounded-3 ">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
