/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/thanks"
      netlify-honeypot="bot-field"
      netlify
    >
      <input hidden className="contact" name="bot-field" />
      <p>
        <label for="name">
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label for="email">
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label for="message">
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default ContactForm;
