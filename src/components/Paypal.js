/** @jsx jsx */
import React, { Component } from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { PayPalButton } from "react-paypal-button-v2";
import { navigate } from "gatsby";

// replace with env vars
const CLIENT = {
  sandbox: process.env.GATSBY_PAYPAL_SB,
  production: process.env.GATSBY_PAYPAL_CLIENT
};

// helper
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

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

export default class PayPal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captain: "",
      company: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // transaction details
    const item = {
      description:
        "Light My Fire 2020 Charity Dinner Auction - Single Table (10 people)",
      // CC receipt description (22 char max)
      CC_desc: "LMF 2020 Dinner",
      amount: 1000
    };

    const { captain, company } = this.state;

    return (
      <>
        <form
          name="tableSale"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <Label htmlFor="captain">Table Captain:</Label>
          <Input
            type="text"
            name="captain"
            id="captain"
            value={captain}
            onChange={this.handleChange}
            placeholder="Table Captain"
            required
          />
          <Label htmlFor="company">Company:</Label>
          <Input
            type="text"
            id="company"
            name="company"
            value={company}
            placeholder="Company"
            onChange={this.handleChange}
          />
          <div
            css={css`
              display: none;
            `}
          >
            <Input type="text" name="payerName" id="payerName" />
            <Input type="text" name="payerEmail" id="payerEmail" />
            <Input type="text" name="itemPurchased" id="itemPurchased" />
            <Input type="text" name="purchaseStatus" id="purchaseStatus" />
            <Input type="text" name="purchaseTime" id="purchaseTime" />
          </div>
        </form>
        <div
          css={css`
            max-width: 500px;
          `}
        >
          <PayPalButton
            css={css`
              width: 400px;
            `}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD",
                      value: item.amount
                    },

                    description: item.description,
                    soft_descriptor: item.CC_desc
                  }
                ]
              });
            }}
            onApprove={(data, actions, state = { ...this.state }) => {
              // Capture the funds from the transaction
              return actions.order.capture().then(function(details) {
                // combine disparate data into form payload
                let payload = {
                  captain: state.captain,
                  company: state.company,
                  payerName:
                    details.payer.name.given_name +
                    " " +
                    details.payer.name.surname,
                  payerEmail: details.payer.email_address,
                  itemPurchased: details.purchase_units[0].description,
                  purchaseStatus: details.status,
                  purchaseTime: details.create_time
                };
                // console.log(payload);
                fetch("/", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  },
                  body: encode({ "form-name": "tableSale", ...payload })
                })
                  .then(() =>
                    navigate("/receipt", {
                      state: { payer: details.payer.name.given_name }
                    })
                  )
                  .catch(error => alert(error));
              });
            }}
            options={{
              clientId: CLIENT.production
            }}
          />
        </div>
      </>
    );
  }
}
