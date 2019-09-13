import React, { Component } from "react";
import Person from "../../Components/Person/Person";
import { connect } from "react-redux";
import * as actionTypes from "../../store/Actions";
import AddPerson from "../../Components/AddPerson/AddPerson";
import FetchPersons from "../../Components/FetchPersons/FetchPersons";
import "./Persons.css";

class Persons extends Component {
  render() {
    return (
      <div>
        <div className="ButtonAlign">
          <FetchPersons personFetched={this.props.onFetchPersonHandler} />
          <AddPerson personAdded={this.props.onAddPersonHandler} />
        </div>

        {this.props.personState.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletePersonHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    personState: state.persons
  };
};
const mapDispatchedToProps = dispatched => {
  return {
    onAddPersonHandler: () =>
      dispatched({
        type: actionTypes.ADD_PERSON,
        payload: {
          id: Math.random(), // not really unique but good enough here!
          name: "Salil",
          age: Math.floor(Math.random() * 40)
        }
      }),
    onDeletePersonHandler: id =>
      dispatched({
        type: actionTypes.DELETE_PERSON,
        personId: id
      }),
    onFetchPersonHandler: () =>
      dispatched({
        type: actionTypes.FETCH_PERSONS
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchedToProps
)(Persons);
