import * as actionTypes from "./Actions";
const initState = {
  persons: [
    {
      name: "Salil",
      age: 29,
      id: 1
    },
    {
      name: "JaiRis",
      age: 28,
      id: 2
    }
  ]
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      return {
        ...state,
        persons: state.persons.concat(action.payload)
      };
    case actionTypes.DELETE_PERSON:
      return {
        persons: state.persons.filter(person => person.id !== action.personId)
      };
    default:
      return state;
  }
  // return state;
};

export default reducer;
