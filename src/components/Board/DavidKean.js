import React from "react";
import BoardMember from "../BoardMember";

const linkedIn = "https://www.linkedin.com/in/david-kean-9b921619/";
const DavidKean = props => {
  return (
    <BoardMember
      img={props.img}
      imgAlt="David Kean"
      imgDescription="LMF Board Member"
      name="David Kean"
      job="DLS | Textile & Electronic Restoration | Treasurer"
      description="I’ve been a part of the restoration community for 14 years. I joined Light My Fire of Puget Sound to help give back and assist those who do not have the funds, resources, or safety nets available to them when disaster strikes. I am very excited to see what we will accomplish."
      linkedIn={linkedIn}
    />
  );
};

export default DavidKean;
