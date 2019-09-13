import React from "react";

import Button from "../UI/Button/Button";

const FetchPersons = props => (
  <Button clickFunctionName={props.personFetched}>Fetch Persons</Button>
);

export default FetchPersons;
