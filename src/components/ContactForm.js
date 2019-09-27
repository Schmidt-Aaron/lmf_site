/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { navigate } from "gatsby";
import { colors } from "../utils/theme";

// styled label
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

//styled input
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

// helper for form
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(err => alert(err));
  };
  render() {
    return (
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/thanks/"
        netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <fieldset
          css={css`
            border: 0 solid black;
            padding: 5px;
          `}
        >
          <Input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <Input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
          />

          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />

          <Label htmlfor="message">Message: </Label>
          <textarea
            name="message"
            placeholder="How can we help?"
            onChange={this.handleChange}
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
              display: block;
              border-radius: 5px;
              color: white;
              background-color: ${colors.darkRed};
              transition: all 0.3s;
              :hover {
                background-color: ${colors.mediumRed};
                transform: translateY(-1px);
              }
              @media (max-width: 1024px) {
              }
            `}
          >
            Submit
          </button>
        </fieldset>
      </form>
    );
  }
}

export default ContactForm;
