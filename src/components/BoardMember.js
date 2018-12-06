import React from "react";

// board member template; Used on Board.js

const BoardMember = props => {
  return (
    <section>
      <h2>{props.name}</h2>
      <h3>{props.job}</h3>
      <img
        src={props.imgURL}
        alt={props.imgAlt}
        description={props.ImgDescription}
      />
      <p>{props.description}</p>
    </section>
  );
};

export default BoardMember;
