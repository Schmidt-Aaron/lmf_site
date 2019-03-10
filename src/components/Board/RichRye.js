import React from "react";
import BoardMember from "../BoardMember";

const RichRye = props => {
  return (
    <BoardMember
      img={props.img}
      imgAlt="RichRye | Board Member"
      imgDescription="LMF Board Member"
      name="Rich Rye"
      job="1-800 Water Damage | Member"
      description="I have been in the Restoration industry since 1999 and I love the Industry. It is, people helping people."
    />
  );
};

export default RichRye;
