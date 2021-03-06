/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Img from "gatsby-image";
import { colors } from "../utils/theme";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";

// board member template; Used on Board.js

const BoardMember = props => {
  const linkedIn = props.linkedIn || null;
  const { img, name, job, description } = props;
  return (
    <section
      css={css`
        border: 1px solid grey;
        box-shadow: 3px 4px 6px 0px grey;
        z-index: 1;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.03);
          z-index: 3;
        }
      `}
    >
      <Img fluid={img.childImageSharp.fluid} alt={name} />
      <div
        css={css`
          padding: 10px;
          min-height: 150px;
          position: relative;
        `}
      >
        <h3
          css={css`
            margin-bottom: 0.5rem;
          `}
        >
          {name}
        </h3>
        <h4
          css={css`
            font-size: 0.8rem;
          `}
        >
          {job}
        </h4>
        <p
          css={css`
            display: none;
          `}
        >
          {description}
        </p>
        <div
          css={css`
            position: absolute;
            bottom: 0;
          `}
        >
          {linkedIn ? (
            <a
              href={linkedIn}
              css={css`
                color: #0077b5;
                transition: all 0.3s;
                &:hover {
                  color: #000;
                }
              `}
            >
              <IconContext.Provider value={{ size: "2.5rem" }}>
                <FaLinkedin title={`${name}'s LinkedIn page`} />
              </IconContext.Provider>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default BoardMember;
