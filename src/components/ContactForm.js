/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Label = styled.label`
  display: inline-block;
  min-width: 140px;
  text-align: right;
  vertical-align: top;
  padding-right: 10px;
  margin-bottom: 20px;
`;

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/thanks"
      netlify-honeypot="bot-field"
      netlify="true"
    >
      <fieldset style={{ border: `0 solid black` }}>
        <input hidden className="contact" name="bot-field" />
        <Label htmlfor="name">Full Name:</Label>
        <input type="text" name="name" />
        <br />
        <Label htmlfor="email">Email:</Label>
        <input type="email" name="email" />
        <br />
        <Label htmlfor="message">Message: </Label>
        <textarea name="message" rows="5" cols="60" />
        <p>
          <button type="submit" style={{ marginLeft: `140px` }}>
            Submit
          </button>
        </p>
      </fieldset>
    </form>
  );
};

export default ContactForm;
