import React, { Component } from "react";
import "./Persons.css";

class Persons extends Component {
  state = {
    Persons: [
      {
        name: "Salil",
        code: "S001",
        id: 1
      },
      {
        name: "JaiRis",
        code: "S002",
        id: 2
      }
    ]
  };

  render() {
    const PersonsObj = this.state.Persons.map(item => {
      return (
        <div className="Persons" key={item.id}>
          <h2>{item.name}</h2>
          <h3>{item.code}</h3>
        </div>
      );
    });
    return PersonsObj;
  }
}

export default Persons;
