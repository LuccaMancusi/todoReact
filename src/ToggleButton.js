import React, { useState } from "react";
import { BiRadioCircleMarked } from "react-icons/bi";
import { BiRadioCircle } from "react-icons/bi";

export function ToggleButton() {
  const [isToggleOn, setIsToggleOn] = useState(false);

  function handleClick() {
    if (isToggleOn) {
      setIsToggleOn(false);
    } else {
      setIsToggleOn(true);
    }
  }

  if (isToggleOn) {
    return (
      <BiRadioCircleMarked
        className="toggleButton"
        onClick={handleClick}
      ></BiRadioCircleMarked>
    );
  } else {
    return (
      <BiRadioCircle
        className="toggleButton"
        onClick={handleClick}
      ></BiRadioCircle>
    );
  }
}
