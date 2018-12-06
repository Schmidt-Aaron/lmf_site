import React from "react";

// board member template; Used on Board.js

const BoardMember = props => {
  const linkedIn = props.linkedIn || null;
  return (
    <section>
      <h3>{props.name}</h3>
      <h4>{props.job}</h4>
      <img
        src={props.imgURL}
        alt={props.imgAlt}
        description={props.ImgDescription}
      />
      <p>{props.description}</p>

      {linkedIn ? <a href={linkedIn}>LinkedIn</a> : ""}
    </section>
  );
};

export default BoardMember;
