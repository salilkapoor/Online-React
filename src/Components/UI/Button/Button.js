import React from "react";

import "./Button.css";

const addPerson = props => (
  <button className="Button" onClick={props.clickFunctionName}>
    {props.children}
  </button>
);

export default addPerson;
