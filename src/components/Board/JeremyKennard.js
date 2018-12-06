import React from "react";
import BoardMember from "../BoardMember";
import jeremy from "../../../static/images/jeremy.jpg";

const JeremyKennard = () => {
  return (
    <BoardMember
      imgURL={jeremy}
      imgAlt="Jeremy Kennard | Member"
      imgDescription="LMF Board Member"
      name="Jeremy Kennard"
      job="Servpro of Renton | Member"
      description="The need to give back to the community that supports me and my family.  Found out the firefighters were using their own moneys for burn out funds thought we should be able to support this without them giving up their own money.  Great cause for money to go directly to people in need from someone who puts their life on the line to help every day."
    />
  );
};

export default JeremyKennard;
