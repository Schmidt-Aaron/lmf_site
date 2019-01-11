import React from "react";
import BoardMember from "../BoardMember";
import diane from "../../../static/images/diane.jpg";

const linkedIn = "https://www.linkedin.com/in/diane-salz-b12a4997";
const DianeSalz = props => {
  return (
    <BoardMember
      img={props.img}
      imgAlt="Diane Salz | Member"
      imgDescription="LMF Board Member"
      name="Diane Salz"
      job="1-800-Water Damage | Member"
      description="I was driving back from Spokane with Lorenzo Silva and he was telling me about this dinner in Boise Idaho that helped fire fighters who give money to people who don’t have insurance. The non-profit organization Light my Fire raised over $50,000 to give to their local fire departments. Lorenzo wanted to start one here and we did. We started talking to restoration companies around Puget Sound to be on the board. In the beginning it was hard to keep people on the board as we were a start-up nonprofit. We wanted to follow what Boise did, as they were successful. We had a hard time finding a fire department that would be on the board and that is when South King County joined us. Our first year we had the dinner at Maple Wood Golf club with a great turn out and made $20,000 for the year. As we laid the foundation for the Seattle chapter I became the chair after Lorenzo’s tragic passing."
      linkedIn={linkedIn}
    />
  );
};

export default DianeSalz;
