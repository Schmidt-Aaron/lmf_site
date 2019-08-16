/** @jsx jsx */
import React from "react";
import dls from "../../static/images/dls.250x230.png";
import psaa from "../../static/images/psaa.261x131.png";
import statewide from "../../static/images/statewide.jpg";
import servpro from "../../static/images/servpro.250x57.png";
import techblox from "../../static/images/techblox.254x55.png";
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
  const { WD, dls, psaa, servpro, statewide, techblox } = props;
  console.log(props);
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
        fluid={dls.childImageSharp.fluid}
        altText="dls logo"
        description="dls"
      />

      <PartnerImage
        link="http://pugetsoundadjusters.org/"
        fluid={psaa.childImageSharp.fluid}
        altText="psaa logo"
        description="psaa"
      />

      <PartnerImage
        link="https://www.servprorenton.com/"
        fluid={servpro.childImageSharp.fluid}
        altText="servpro logo"
        description="servpro renton"
      />
      <PartnerImage
        link="https://www.techblox.com/cgi-sys/suspendedpage.cgi"
        fluid={techblox.childImageSharp.fluid}
        altText="techblox logo"
        description="techblox"
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
        description="1800 water damage"
      />
    </div>
  );
};

export default Partners;
