import React from "react";

import Button from "../UI/Button/Button";

const addPerson = props => (
  <Button clickFunctionName={props.personAdded}>Add Person</Button>
);

export default addPerson;
