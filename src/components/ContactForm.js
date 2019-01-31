/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Label = styled.label`
  display: inline-block;
  min-width: 110px;
  text-align: right;
  vertical-align: top;
  padding-right: 10px;
  margin-bottom: 20px;
`;
const Input = styled.input`
  width: 300px;
`;

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/thanks"
      netlify-honeypot="bot-field"
    >
      <fieldset style={{ border: `0 solid black` }}>
        <input hidden className="contact" name="bot-field" />
        <Label htmlfor="name">Full Name:</Label>
        <Input type="text" name="name" placeholder="Name" />
        <br />
        <Label htmlfor="email">Email:</Label>
        <Input type="email" name="email" placeholder="Email" />
        <br />
        <Label htmlfor="message">Message: </Label>
        <textarea
          name="message"
          placeholder="How can we help?"
          rows="5"
          style={{ width: `calc(100% - 140px)` }}
        />
        <p>
          <button type="submit" style={{ marginLeft: `110px` }}>
            Submit
          </button>
        </p>
      </fieldset>
    </form>
  );
};

export default ContactForm;
