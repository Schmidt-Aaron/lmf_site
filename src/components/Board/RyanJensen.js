import React from "react";
import BoardMember from "../BoardMember";
import ryanJensen from "../../../static/images/ryanJensen.jpg";

const RyanJensen = () => {
  return (
    <BoardMember
      imgURL={ryanJensen}
      imgAlt="RyanJenson | Board Member"
      imgDescription="LMF Board Member"
      name="Ryan Jensen"
      job="PWC Construction | Member"
      description="Being a large loss adjuster in the insurance industry for almost 10 years, fire was a big part of my life.  I experienced the direct effect of these tragedies on families and although I was able to help them through their insurance policy, there were many families who did not have coverage.  Joining Light My Fire has given me the avenue to assist these people who have nothing and I am honored to be a part of this organization."
    />
  );
};

export default RyanJensen;
