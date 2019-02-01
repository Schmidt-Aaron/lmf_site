/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Label = styled.label`
  display: none;
  min-width: 110px;
  text-align: right;
  vertical-align: top;
  padding-right: 10px;
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    display: none;
    min-width: 100%;
    text-align: left;
    margin-bottom: 10px;
  }
`;
const Input = styled.input`
  width: calc(100% - 140px);
  padding: 5px;
  margin-bottom: 1rem;
  @media (max-width: 1024px) {
    display: block;
    width: 100%;
    text-align: left;
    border: 0.5px solid hsla(0, 0%, 0%, 0.33);
  }
`;

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/thanks/"
      netlify-honeypot="bot-field"
    >
      <fieldset
        css={css`
          border: 0 solid black;
          padding: 5px;
        `}
      >
        <input hidden className="contact" name="bot-field" />
        <Label htmlfor="name">Name:</Label>
        <Input type="text" name="name" placeholder="Name" />

        <Label htmlfor="email">Email:</Label>
        <Input type="email" name="email" placeholder="Email" />

        <Label htmlfor="message">Message: </Label>
        <textarea
          name="message"
          placeholder="How can we help?"
          rows="5"
          css={css`
            width: calc(100% - 140px);
            min-width: 300px;
            padding: 5px;
            margin-bottom: 1rem;
            @media (max-width: 1024px) {
              display: block;
              width: 100%;
              margin-left: 0;
              text-align: left;
              border: 0.5px solid hsla(0, 0%, 0%, 0.33);
            }
          `}
        />

        <button
          type="submit"
          css={css`
            margin-left: 110px;
            @media (max-width: 1024px) {
              display: block;
              margin-left: 0;
            }
          `}
        >
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default ContactForm;
