/** @jsx jsx */
import React, { Component } from "react";
import { css, jsx } from "@emotion/core";
import { colors } from "../utils/theme";

const StoreItem = props => {
  const {
    name,
    unit_amount,
    sku,
    description,
    addItem,
    removeItem,
    createCartQuantityHTML
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
          border-right: 1px solid grey;
          flex-basis: 75px;
          background-color: ${colors.PRIMARY};
        `}
      >
        <div
          css={css`
            width: 100%;
            display: flex;
            flex-basis: 50%;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            margin-bottom: 0;
            color: white;
            cursor: pointer;
            border-bottom: 1px solid ${colors.black};
          `}
          onClick={() => addItem(name, unit_amount, sku, description)}
        >
          <p
            css={css`
              margin: 0;
              line-height: 10px;
            `}
          >
            +
          </p>
        </div>
        <div
          css={css`
            width: 100%;
            display: flex;
            flex-basis: 50%;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            margin-bottom: 0;
            color: white;
            cursor: pointer;
            border-top: 1px solid ${colors.black};
          `}
          onClick={() => removeItem(sku)}
        >
          <p
            css={css`
              margin: 0;
              line-height: 10px;
            `}
          >
            -
          </p>
        </div>
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
            {createCartQuantityHTML(sku)}
          </p>
          <p
            css={css`
              margin-bottom: 0.5rem;
              font-weight: 500;
            `}
          >
            ${unit_amount}
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
