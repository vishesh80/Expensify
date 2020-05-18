import { add, remove, edit , setEndDate , setStartDate, setTextFilter } from "../../raw/modules/actions";
import moment from 'moment';

test("Action Fuction test (add)", () => {
  const obj = {
    description: "eg",
    amount: 0,
    note: "eg",
    id: "eg",
    createdAt: 0,
  };
  expect(add(Object.assign({}, obj))).toEqual({
    type: "ADD",
    expense: Object.assign({}, obj),
  });
});


test("Action Fuction test (edit)", () => {
  const obj = {
    description: "eg",
    note: "eg",
    id: "eg"
    };
  expect(edit(obj)).toEqual({
    type: "EDIT",
    id: "eg",
    edits: Object.assign({}, {
      description: "eg",
      note: "eg"
    }),
  });
});

test("Action Fuction test (remove)", () => {
  
  expect(remove('eg')).toEqual({
    type: "REMOVE",
    id: "eg"
  });
});


test("Action Fuction test (setStartDate)", () => {

  expect(setStartDate(moment(0))).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});


test("Action Fuction test (setEndDate)", () => {

  expect(setEndDate(moment(0))).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});


test("Action Fuction test (setTextFilter)", () => {

  expect(setTextFilter('eg')).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'eg'
  });
});

