/** @jsx jsx */
import React, { Component } from "react";
import { css, jsx } from "@emotion/core";
import { colors } from "../utils/theme";

const StoreItem = props => {
  const {
    name,
    cost,
    itemId,
    description,
    addItem,
    removeItem,
    checkCartForQuantity
  } = props;
  return (
    <div
      css={css`
        display: flex;
        border: 1px solid grey;
        margin-bottom: 1rem;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-right: 1px solid grey;
          flex-basis: 75px;
          background-color: ${colors.PRIMARY};
        `}
      >
        <p
          css={css`
            font-size: 2rem;
            margin-bottom: 0;
            color: white;
          `}
          onClick={() => addItem(name, cost, itemId)}
        >
          +
        </p>
        <p
          css={css`
            font-size: 2rem;
            margin-bottom: 0;
            color: white;
          `}
          onClick={() => removeItem(itemId)}
        >
          -
        </p>
      </div>
      <div
        css={css`
          padding: 1rem;
          flex-basis: 100%;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <p
            css={css`
              font-weight: 500;
              font-size: 1.1rem;
              margin-bottom: 0.5rem;
            `}
          >
            {name}
            {checkCartForQuantity(itemId)}
          </p>
          <p
            css={css`
              margin-bottom: 0.5rem;
              font-weight: 500;
            `}
          >
            ${cost}
          </p>
        </div>
        <p
          css={css`
            font-size: 0.9rem;
            margin-bottom: 0;
          `}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default StoreItem;
