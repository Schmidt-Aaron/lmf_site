import React from "react";
import DianeSign from "../../../static/images/diane_sign.png";

import { Underlined } from "../styles";
// chairmans letter; used on about page

const Chairman = () => {
  return (
    <section>
      <em>
        <Underlined>
          <h2>A Letter from our Board</h2>
        </Underlined>
        <p>Dear friends and potential donors of Light My Fire,</p>
        <p>
          We have a great need in our community that needs to be fulfilled.
          Anyone who has ever experienced a fire to their home or business knows
          the emotional, as well as monetary, impact that follows. Imagine
          waking up to a fire in your home and quickly evacuating your family,
          or coming home to one and seeing not just your belongings, but your
          entire sense of security gone… In the Seattle area alone, there are
          approximately 400 house fires every year. Immediately following these
          tragedies, many families are left homeless with no place to go. All
          their belongings are burned to the ground, forcing them to start over
          with very little resources, if any, to turn to.
        </p>
        <p>
          Light My Fire of Puget Sound is a charitable organization started by
          firefighters themselves, recognizing this incredible need in their
          community. Since the inception of our organization we have teamed up
          with local fire departments by gathering donations, which are then
          used by those fire fighters to provide fire education, help families
          find temporary housing, food, water, and other essentials immediately
          following a home fire.
        </p>
        <p>
          Please consider helping in any way you can by either making a cash
          contribution, or donating an item to be auctioned at the next
          fundraising event. Feel free to get creative! There are many things
          you can auction and nothing is too small with the ultimate goal being
          charity. Light My Fire is a not-for-profit organization and donations
          are tax deductible.
        </p>
        <p>
          Working together, we can continue raising money to aid in this
          important cause. On behalf of the Light My Fire organization and the
          brave firefighters who protect it, thank you for supporting us in
          whatever way you are able.
        </p>
        <p>
          <img src={DianeSign} />
        </p>
      </em>
    </section>
  );
};

export default Chairman;
