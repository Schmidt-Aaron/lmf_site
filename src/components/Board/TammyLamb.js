import React from "react";
import BoardMember from "../BoardMember";

const TammyLamb = props => {
  return (
    <BoardMember
      img={props.img}
      imgAlt="TammyLamb | Board Member"
      imgDescription="LMF Board Member"
      name="Tammy Lamb"
      job="West Pierce Fire & Rescue | Member"
      description="I am the Executive Assistant/Grant Writer for West Pierce Fire & Rescue. "
    />
  );
};

export default TammyLamb;
