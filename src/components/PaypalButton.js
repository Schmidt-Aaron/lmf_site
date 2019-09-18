/** @jsx jsx */
import React from "react";
import ReactDOM from "react-dom";
import { css, jsx } from "@emotion/core";
import scriptLoader from "react-async-script-loader";

class PaypalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false
    };
    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;
    if (isScriptLoaded && isScriptLoadSucceed) {
      this.setState({ showButton: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;
    const isLoadedButWasntLoadedBefore =
      !this.state.showButton && !this.props.isScriptLoaded && isScriptLoaded;
    if (isLoadedButWasntLoadedBefore) {
      if (isScriptLoadSucceed) {
        this.setState({ showButton: true });
      }
    }
  }

  render() {
    const {
      total,
      currency,
      env,
      commit,
      client,
      onSuccess,
      onError,
      onCancel
    } = this.props;
    const { showButton } = this.state;
    const payment = () =>
      paypal.payment.create(env, client, {
        transactions: [
          {
            amount: {
              total,
              currency
            },
            description: "Light My Fire 2020 Dinner & Silent Auction"
          }
        ]
      });
    const onApprove = (data, actions) =>
      actions.order.capture().then(() => {
        const payment = {
          paid: true,
          cancelled: false,
          payerID: data.payerID,
          paymentID: data.paymentID,
          paymentToken: data.paymentToken,
          returnUrl: data.returnUrl
        };
        onSuccess(payment);
      });
    return (
      <div>
        {showButton && (
          <paypal.Button.react
            env={env}
            client={client}
            commit={commit}
            payment={payment}
            onAuthorize={onApprove}
            onCancel={onCancel}
            onError={onError}
          />
        )}
      </div>
    );
  }
}

export default scriptLoader("https://paypalobjects.com/sdk/js")(PaypalButton);
