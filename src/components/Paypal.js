/** @jsx jsx */
import React, { Component } from "react";
import { css, jsx } from "@emotion/core";
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

export default class PayPal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captain: "",
      company: ""
    };
    this.postData = this.postData.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // example
  // handleSubmit = e => {
  //   e.preventDefault();
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "tableSale", ...this.state })
  //   })
  //     .then(() => alert("Success!"))
  //     .catch(error => alert(error));
  // };

  postData(...state) {
    console.log(state);
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encode({ "form-name": "tableSale", state })
    });
  }

  render() {
    // transaction details
    const item = {
      // item description
      description:
        "Light My Fire 2020 Charity Dinner Auction - Single Table (10 people)",
      // CC receipt description (22 char max)
      CC_desc: "LMF 2020 Dinner",
      // price
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
          <label htmlFor="captain">
            Table Captain:
            <input
              type="text"
              name="captain"
              value={captain}
              onChange={this.handleChange}
              required
            />
          </label>
          <label htmlFor="company">
            Company:
            <input
              type="text"
              name="company"
              value={company}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <PayPalButton
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
          onApprove={(
            data,
            actions,
            state = { ...this.state },
            postData = this.postData
          ) => {
            // Capture the funds from the transaction
            return actions.order.capture().then(function(details) {
              // Show a success message to your buyer
              // alert("Transaction completed by " + details.payer.name.given_name);
              console.log(details);
              console.log(state);
              // // OPTIONAL: Call your server to save the transaction
              // return fetch("/paypal-transaction-complete", {
              //   method: "post",
              //   body: JSON.stringify({
              //     orderID: data.orderID
              //   })
              // });
              // postData(state)
              // combine
              let payload = {
                ...state,
                ...details
              };
              fetch("/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                body: encode({ "form-name": "tableSale", payload })
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
      </>
    );
  }
}
