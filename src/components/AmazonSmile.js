/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Wrapper, Underline } from "./styles";

const Underlined = ({ children }) => {
  return (
    <div
      css={css`
        display: inline-block;
      `}
    >
      {children}
      <hr
        css={css`
          position: relative;
          top: -43px;
          background: #eee;
          height: 10px;
          z-index: -1;
          transform: scaleX(1.05);
          margin-bottom: 0;
        `}
      />
    </div>
  );
};

const AmazonSmile = props => {
  return (
    <section
      css={css`
        background-color: #f5cbcb;
        padding: 2rem;
      `}
    >
      <Wrapper>
        <Underlined>
          <h2>Help out while you shop!</h2>
        </Underlined>
        <p>
          Do you shop on Amazon? If so, there is a way for a portion of all your
          eligible purchases to be donated to Light My Fire - and there is no
          additional cost to you! All it takes is a minute to set up your amazon
          account.
        </p>
        <h3>Giving with Amazon Smile</h3>
        <p>
          Amazon Smile is a charity program set up by Amazon where a small
          percentage of your purchases will be donated to a charity of your
          choice.
        </p>
        <h3>How to get Started</h3>
        <ol
          css={css`
            text-align: left;
          `}
        >
          <li>Follow this link to choose your Amazon Smile Charity</li>
          <li>
            Shop at smile.amazon.com. Amazon only donates if you make the
            purchases on the smile sub-domain - so don't forget!
          </li>
          <li>That's it! I told you it would only take a minute.</li>
        </ol>

        <p>
          If you are like me, and sometimes forget to go to smile.amazon.com
          when you shop there are some handy browser extensions that will
          automatically redirect you.
        </p>
        <ul
          css={css`
            text-align: left;
          `}
        >
          <li>Chrome: </li>
          <li>Firefox: </li>
        </ul>
      </Wrapper>
    </section>
  );
};

export default AmazonSmile;
