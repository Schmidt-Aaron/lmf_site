/** @jsx jsx */
import React, { Component } from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { PayPalButton } from "react-paypal-button-v2";
import { navigate } from "gatsby";
import StoreItem from "./StoreItem";
import { availableItems } from "./data/storeItems";
import { createPurchaseUnit, buildNetlifyFormPayload } from "../utils/helpers";

// replace with env vars
const CLIENT = {
  // sandbox: process.env.GATSBY_PAYPAL_SB,
  sandbox: "sb",
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
  addItem = (name, unit_amount, sku, description) => {
    const itemCode = sku;
    let cartCopy = Object.assign({}, this.state.cart);

    // if not in cart => add item to cart
    if (!this.state.cart[itemCode]) {
      cartCopy[itemCode] = {
        sku,
        name,
        unit_amount,
        description,
        quantity: 1
      };

      this.setState({
        cart: cartCopy
      });

      console.log(`${itemCode} added to cart`);
    }

    // if already in cart => increase quantity
    if (this.state.cart[itemCode]) {
      // limit # items available for purchase

      if (sku === "ROUND") {
        if (!this.limitCartItemAmount("ROUND", 4, cartCopy)) {
          cartCopy[itemCode]["quantity"] += 1;
          console.log(`${itemCode} added to cart`);
        }
      } else {
        cartCopy[itemCode]["quantity"] += 1;
        console.log(`${itemCode} added to cart`);
      }

      // update the cart
      this.setState({
        cart: cartCopy
      });
    }
  };

  // determine if the item can be added to cart
  // TODO create client alert then fire with this function
  limitCartItemAmount = (sku, limit, cart) => {
    if (cart[sku]) {
      if (cart[sku]["quantity"] === limit) {
        return true;
      } else {
        return false;
      }
    }
  };

  // remove item from cart
  removeItem = sku => {
    const itemCode = sku;
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

  // returns cart quantity
  checkCartForQuantity = sku => {
    const itemCode = sku;

    if (
      !this.state.cart[itemCode] ||
      this.state.cart[itemCode]["quantity"] === 0
    ) {
      return 0;
    }

    let itemTotal = this.state.cart[itemCode]["quantity"];
    return itemTotal;
  };

  // calc cart quantity then return html
  createCartQuantityHTML = sku => {
    let total = this.checkCartForQuantity(sku);
    if (total === 0) {
      return "";
    }
    if (total > 0) {
      return (
        <span
          css={css`
            margin-left: 1rem;
          `}
        >
          ({total})
        </span>
      );
    }
  };

  render() {
    // destructure our state
    const { captain, company, cart, contactEmail } = this.state;
    let totalItems = 0;
    let totalCartAmount = 0;

    // calcs cart total from the cart object in state
    const updateCartTotals = () => {
      let total = 0;
      let cartCopy = Object.assign({}, cart);

      // loop through our cart object
      for (let [key, value] of Object.entries(cartCopy)) {
        let itemTotalCost = value.unit_amount * value.quantity;
        totalItems += value.quantity;
        totalCartAmount += itemTotalCost;
      }
    };

    // const cartTotal = () => {
    //   let total = 0;
    //   let cartCopy = Object.assign({}, cart);

    //   // loop through our cart object
    //   for (let [key, value] of Object.entries(cartCopy)) {
    //     let itemTotalCost = value.unit_amount * value.quantity;
    //     total += itemTotalCost;
    //   }

    //   return total;
    // };

    return (
      <div>
        <div>
          {availableItems.map((item, i) => (
            <StoreItem
              key={i}
              sku={item.sku}
              name={item.name}
              description={item.description}
              unit_amount={item.unit_amount}
              addItem={this.addItem}
              removeItem={this.removeItem}
              createCartQuantityHTML={this.createCartQuantityHTML}
            />
          ))}
          <p
            css={css`
              text-align: end;
            `}
          >
            {updateCartTotals()} Total ({totalItems} items): ${totalCartAmount}
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
              // builds our purchase unit
              let purchase_units = createPurchaseUnit(cart);

              return actions.order
                .create({
                  purchase_units: purchase_units
                })
                .catch(err => console.log(err));
            }}
            onApprove={(data, actions, state = { ...this.state }) => {
              // Capture the funds from the transaction
              return actions.order.capture().then(function(details) {
                // combine disparate data into form payload
                let payload = buildNetlifyFormPayload(details, state);

                // POST netlify form data
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
              // clientId: CLIENT.production
              clientId: CLIENT.sandbox
              // debug: true
            }}
          />
        </div>
      </div>
    );
  }
}
