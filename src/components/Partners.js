import React from "react";
import belfor from "../../static/images/belfor.250x74.png";
import dls from "../../static/images/dls.250x230.png";
import farmers from "../../static/images/farmers.115x61.png";
import psaa from "../../static/images/psaa.261x131.png";
import pwc from "../../static/images/pwc.252x77.png";
import servpro from "../../static/images/servpro.250x57.png";
import techblox from "../../static/images/techblox.254x55.png";

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
    <div>
      <PartnerImage
        link="https://www.belfor.com/en/us/belfor-usa-offices/washington/seattle"
        imgURL={belfor}
        altText="belfor logo"
        description="belfor"
      />
      <PartnerImage
        link="https://www.arkenco.com/"
        imgURL={dls}
        altText="dls logo"
        description="dls"
      />
      <PartnerImage
        link="https://agents.farmers.com/wa/bellevue/johnson-marshall"
        imgURL={farmers}
        altText="farmers logo"
        description="farmers"
      />
      <PartnerImage
        link="http://pugetsoundadjusters.org/"
        imgURL={psaa}
        altText="psaa logo"
        description="psaa"
      />
      <PartnerImage
        link="http://www.pwcconstruction.com/"
        imgURL={pwc}
        altText="pwc logo"
        description="pwc"
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
    </div>
  );
};

export default Partners;
