/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Img from "gatsby-image";

const PartnerImage = props => {
  return (
    <div
      css={css`
        width: 200px;
      `}
    >
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <Img
          fluid={props.fluid}
          alt={props.altText}
          title={props.description}
          imgStyle={{ objectFit: "cover" }}
        />
      </a>
    </div>
  );
};

//  used on the partners page partner image data is fed with props.data

const Partners = props => {
  //deconstruct incoming images
  const { WD, dls, psaa, servpro, statewide, techblox, westPierce } = props;
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        align-items: center;
        justify-items: center;
        @media (max-width: 670px) {
          grid-template-columns: 1fr 1fr;
        }
      `}
    >
      <PartnerImage
        link="https://www.dlsrestore.com/"
        fluid={dls.childImageSharp.fluid}
        altText="dls logo"
        description="DLS Restore"
      />

      <PartnerImage
        link="http://pugetsoundadjusters.org/"
        fluid={psaa.childImageSharp.fluid}
        altText="psaa logo"
        description="PSAA"
      />

      <PartnerImage
        link="https://www.servprorenton.com/"
        fluid={servpro.childImageSharp.fluid}
        altText="servpro logo"
        description="Servpro Renton"
      />
      <PartnerImage
        link="https://www.techblox.com/cgi-sys/suspendedpage.cgi"
        fluid={techblox.childImageSharp.fluid}
        altText="techblox logo"
        description="Techblox"
      />
      <PartnerImage
        link="http://gostatewide.com/"
        fluid={statewide.childImageSharp.fluid}
        altText="statewide logo"
        description="Statewide"
      />
      <PartnerImage
        link="https://www.1800WATERDAMAGE.com"
        fluid={WD.childImageSharp.fluid}
        altText="1800 water damage logo"
        description="1-800 Water Damage"
      />
      <PartnerImage
        link="https://www.westpierce.org/ "
        fluid={westPierce.childImageSharp.fluid}
        altText="West Pierce Fire & Rescue logo"
        description="West Pierce Fire & Rescue"
      />
    </div>
  );
};

export default Partners;
