import { put, takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "./Actions";

const delay = ms => new Promise(res => setTimeout(res, ms));
function* fetchPersons() {
  // const json = yield fetch(
  //   "https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc"
  // ).then(response => response.json());
  yield delay(1000);
  const persons = [
    {
      name: "John",
      age: 59,
      id: 1
    },
    {
      name: "Steve",
      age: 48,
      id: 2
    }
  ];
  yield put({ type: actionTypes.PERSONS_RECIVED, json: persons });
}
function* actionWatcher() {
  yield takeLatest(actionTypes.FETCH_PERSONS, fetchPersons);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
