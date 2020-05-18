import { ER, FR } from '../../raw/modules/reducers';
import moment from 'moment';

/*-----------------------FR test------------------------------------------------ */

const defaultFilter = {
    text: "",
    startDate: null,
    endDate: null,
    sortBy: null
};

test('filter Reducer test (Text)',() => {

    const result = FR(defaultFilter, {
        type: 'SET_TEXT_FILTER',
        text: "eg"
    });
    expect(result.text).toBe("eg");
});

test('filter Reducer test (set sortByDate)', () => {

    const result = FR(defaultFilter, {
        type: 'SORT_BY_DATE'
    });
    expect(result.sortBy).toBe('date');
});

test('filter Reducer test (set sortByAmount)', () => {

    const result = FR(defaultFilter, {
        type: 'SORT_BY_AMOUNT'
    });
    expect(result.sortBy).toBe('amount');
});

test('filter Reducer test (set endDate)', () => {

    const result = FR(defaultFilter, {
        type: 'SET_END_DATE',
        endDate : moment(0).add(2,'day')
    });
    expect(result.endDate.format("Do MM YYYY")).toBe(moment(0).add(2, 'day').format("Do MM YYYY"));
});

test('filter Reducer test (set startDate)', () => {

    const result = FR(defaultFilter, {
        type: 'SET_START_DATE',
        startDate: moment(0).add(2, 'day')
    });
    expect(result.startDate.format("Do MM YYYY")).toBe(moment(0).add(2, 'day').format("Do MM YYYY"));
});

/*-------------------------------ER test------------------------------------------ */

const expenses = [

    {
        description: "rent",
        amount: 100,
        createdAt: moment(0).add(1, 'day'),
        id: "a1"
    },
    {
        description: "re",
        amount: 200,
        createdAt: moment(0).add(2, 'day'),
        id: "a2"
    },
    {
        description: "car",
        amount: 300,
        createdAt: moment(0).add(4, 'day'),
        id: "a3"
    },
    {
        description: "bike",
        amount: 400,
        createdAt: moment(0).add(6, 'day'),
        id: "a4"
    }

];


test('Expense Reducer test (add)', () => {

    const expense = {
        description: "Bar",
        amount: "4000",
        id: "a5",
        createdAt: moment(0).add(8, 'day')
    }

    const result = ER(expenses, { type: "ADD", expense: {...expense}});
    expect(result).toEqual([...expenses,{...expense}]);
});


test('Expense Reducer test (edit)', () => {

    const expense = {
        description: "Bar",
        amount: "4000",
        createdAt: moment(0).add(8, 'day')
    }

    const result = ER(expenses, { type: "EDIT", id:'a4', edits: Object.assign({}, expense) });
    expect(result[3]).toEqual({ ...expense , id: 'a4' });
});

test('Expense Reducer test (remove)', () => {

    const result = ER(expenses, { type: "REMOVE", id: 'a2' });
    expect(result).toEqual([expenses[0],expenses[2],expenses[3]]);
});




