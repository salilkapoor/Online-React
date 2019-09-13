import React from "react";
import "./Person.css";

function Person(props) {
  return (
    <div className="Person" onClick={props.clicked}>
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
    </div>
  );
}

export default Person;
