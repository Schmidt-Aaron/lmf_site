/** @jsx jsx */
import React, { Component } from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { PayPalButton } from "react-paypal-button-v2";
import { navigate } from "gatsby";
import StoreItem from "./StoreItem";

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
      company: "",
      contactEmail: "",
      cart: {}
    };
  }

  // handle form input data binding
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // add item to our cart
  addItem = (item, cost, itemId) => {
    const itemCode = itemId;
    let cartCopy = Object.assign({}, this.state.cart);

    // if not in cart => add item to cart
    if (!this.state.cart[itemCode]) {
      cartCopy[itemCode] = {
        item,
        cost,
        quantity: 1
      };
      this.setState({
        cart: cartCopy
      });
      console.log(`${itemCode} added to cart`);
    }

    // if already in cart => increase quantity
    if (this.state.cart[itemCode]) {
      // console.log(cartCopy[itemCode]["quantity"]);
      cartCopy[itemCode]["quantity"] += 1;
      this.setState({
        cart: cartCopy
      });
      console.log(`${itemCode} added to cart`);
    }
  };

  // remove item from cart
  removeItem = itemId => {
    const itemCode = itemId;
    // check that item is in cart before firing
    if (this.state.cart[itemCode]["quantity"] >= 1) {
      let cartCopy = Object.assign({}, this.state.cart);
      cartCopy[itemCode]["quantity"] -= 1;

      this.setState({
        cart: cartCopy
      });

      console.log(`${itemCode} removed`);
    }
    console.log("item not found");
  };

  checkCartForQuantity = itemId => {
    const itemCode = itemId;

    // return empty string if item is not in cart or if item quantity is 0
    if (
      !this.state.cart[itemCode] ||
      this.state.cart[itemCode]["quantity"] === 0
    ) {
      return "";
    }

    let itemTotal = this.state.cart[itemCode]["quantity"];
    return (
      <span
        css={css`
          margin-left: 1rem;
        `}
      >
        ({itemTotal})
      </span>
    );
  };

  render() {
    // destructure our state
    const { captain, company, cart, contactEmail } = this.state;

    // transaction details
    const item = {
      description:
        "Light My Fire 2020 Charity Dinner Auction - Single Table (10 people)",
      // CC receipt description (22 char max)
      CC_desc: "LMF 2020 Dinner",
      amount: 1000
    };

    const cartTotal = () => {
      let total = 0;
      let cartCopy = Object.assign({}, cart);

      // loop through our cart object
      for (let [key, value] of Object.entries(cartCopy)) {
        let itemTotalCost = value.cost * value.quantity;
        total += itemTotalCost;
      }

      return total;
    };

    const availableItems = [
      {
        itemId: "TABLE",
        name: "Buy a Table",
        description:
          "Purchase a table at our upcoming charity dinner. Each table sits 10 people.",
        amount: 1000
      },
      {
        itemId: "FIREMAN",
        name: "Fireman's Award",
        description:
          "Sponsor the award given to our two board member fire fighters, who make our work possible",
        amount: 300
      },
      {
        itemId: "CENTER",
        name: "Center Pieces",
        description:
          "Work with fire fighter board member to design center pieces for 20 tables",
        amount: 400
      },
      {
        itemId: "ROUND",
        name: "Buy a Round",
        description:
          "Sponsor a round of drinks for a table. Ask us about setting up your company flag at the bar. (4 remaining)",
        amount: 500
      },
      {
        itemId: "COINS",
        name: "Challenge Coins",
        description:
          "Purchases (10) Light My Fire of Puget Sound challenge coins.",
        amount: 800
      }
    ];

    return (
      <div>
        <div>
          {availableItems.map((item, i) => (
            <StoreItem
              key={i}
              itemId={item.itemId}
              name={item.name}
              description={item.description}
              cost={item.amount}
              addItem={this.addItem}
              removeItem={this.removeItem}
              checkCartForQuantity={this.checkCartForQuantity}
            />
          ))}
          <p
            css={css`
              text-align: end;
            `}
          >
            Total: ${cartTotal()}
          </p>
        </div>
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
          <Label htmlFor="contactEmail">Contact Email:</Label>
          <Input
            type="text"
            name="contactEmail"
            id="contactEmail"
            value={contactEmail}
            placeholder={"Contact Email"}
            onChange={this.handleChange}
          />
          <div
            css={css`
              display: none;
            `}
          >
            <Input type="text" name="payerEmail" id="payerEmail" />
            <Input type="text" name="payerName" id="payerName" />
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
                // let convertItemsIntoArray = details.purchase_units.map(item => item.description)

                // combine disparate data into form payload
                let payload = {
                  captain: state.captain,
                  company: state.company,
                  contactEmail: state.contactEmail,
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
      </div>
    );
  }
}
