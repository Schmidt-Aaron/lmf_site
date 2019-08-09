/** @jsx jsx */
import React from "react";
import dls from "../../static/images/dls.250x230.png";
import psaa from "../../static/images/psaa.261x131.png";
import statewide from "../../static/images/statewide.jpg";
import servpro from "../../static/images/servpro.250x57.png";
import techblox from "../../static/images/techblox.254x55.png";
import { css, jsx } from "@emotion/core";

const PartnerImage = props => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img
        src={props.imgURL}
        alt={props.altText}
        description={props.description}
      />
    </a>
  );
};

//  used on the partners page

const Partners = () => {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        align-items: center;
        justify-items: center;
      `}
    >
      <PartnerImage
        link="https://www.dlsrestore.com/"
        imgURL={dls}
        altText="dls logo"
        description="dls"
      />

      <PartnerImage
        link="http://pugetsoundadjusters.org/"
        imgURL={psaa}
        altText="psaa logo"
        description="psaa"
      />

      <PartnerImage
        link="https://www.servprorenton.com/"
        imgURL={servpro}
        altText="servpro logo"
        description="servpro"
      />
      <PartnerImage
        link="https://www.techblox.com/cgi-sys/suspendedpage.cgi"
        imgURL={techblox}
        altText="techblox logo"
        description="techblox"
      />
      <PartnerImage
        link="http://gostatewide.com/"
        imgURL={statewide}
        altText="statewide logo"
        description="Statewide"
      />
    </div>
  );
};

export default Partners;
