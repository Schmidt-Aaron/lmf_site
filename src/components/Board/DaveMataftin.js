import React from "react";
import BoardMember from "../BoardMember";
import davePic from "../../../static/images/dave.jpg";

const DaveMataftin = () => {
  return (
    <BoardMember
      imgURL={davePic}
      imgAlt="Dave Mataftin | Board Member"
      imgDescription="LMF Board Member"
      name="Dave Mataftin"
      job="Fire Fighter | Member"
      description="Dave Mataftin has been in the fire service over 35 years. Starting out as a volunteer firefighter in 1976 and was hired as a professional firefighter in 1981 at age 21. He climbed through the ranks first to Lieutenant, then to Captain. Was selected to become the Assistant Fire Marshal, after a year in the office, decided that the best service he could provide was back in a response role. Tested for and promoted to the rank of Battalion Chief, currently assigned to B-Shift. Dave hold a Bachelor’s Degree in Fire Science. “I love what I do- helping those in need is extremely rewarding. It’s never been a job but rather an adventure, Light My Fire allows me to continue to assist those who need help”."
    />
  );
};

export default DaveMataftin;
