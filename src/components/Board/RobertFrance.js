import React from "react";
import BoardMember from "../BoardMember";
import robertFrance from "../../../static/images/robertf.jpg";

const RobertFrance = () => {
  return (
    <BoardMember
      imgURL={robertFrance}
      imgAlt="RobertFrance | Board Member"
      imgDescription="LMF Board Member"
      name="Robert France"
      job="Wrench | Member"
      description="I was asked by Lorenzo Silva to help him start the 2nd chapter of Light My Fire in early 2014.   Once I heard what it was all about, I was sold.   Being in the disaster restoration industry we hear stories all the time of people and families, after a fire, being put in tough situations with nothing to their name.   This organization was going to be specially designed to help people instantly, on the spot.   When I also heard that firefighters were donating their own money to a fund for situations like these, then I was a 100% convinced that we needed to start this organization and grow it as big as possible.   I couldn’t believe that firefighters, after risking their lives to save others’, are being forced to dip into their own pockets.  That never shouldn’t be asked of them.   Light My Fire has become one of the most positive things in my life over the last year and a half and I can’t wait to see how big we will make it."
    />
  );
};

export default RobertFrance;
