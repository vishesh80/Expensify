import moment from 'moment';
import filter from '../../raw/modules/filter';

const expenses = [

    {
        description : "rent",
        amount : 100,
        createdAt : moment(0).add(1,'day')
    },
    {
        description: "re",
        amount: 200,
        createdAt: moment(0).add(2, 'day')
    },
    {
        description: "car",
        amount: 300,
        createdAt: moment(0).add(4, 'day')
    },
    {
        description: "bike",
        amount: 400,
        createdAt: moment(0).add(6, 'day')
    }

];

test("Filter Fuction test (text filter)",() => {

    const filterValues = {
        text: "re",
        startDate: null,
        endDate: null,
        sortBy: "amount"
    };

    expect(filter(expenses,filterValues)).toEqual([expenses[1],expenses[0]]);
});

test("Filter Fuction test (startDate filter)", () => {

    const filterValues = {
        text: "",
        startDate: moment(0).add(2, 'day'),
        endDate: null,
        sortBy: "amount"
    };

    expect(filter(expenses, filterValues)).toEqual([expenses[3], expenses[2], expenses[1]]);
});

test("Filter Fuction test (endDate filter)", () => {

    const filterValues = {
        text: "",
        startDate: null,
        endDate: moment(0).add(2, 'day'),
        sortBy: "amount"
    };

    expect(filter(expenses, filterValues)).toEqual([expenses[1],expenses[0]]);
});

test("Filter Fuction test (startDate and endDate filter)", () => {

    const filterValues = {
        text: "",
        startDate: moment(0).add(2, 'day'),
        endDate: moment(0).add(4, 'day'),
        sortBy: "amount"
    };

    expect(filter(expenses, filterValues)).toEqual([expenses[2], expenses[1]]);
});

test("Filter Fuction test (sortByAmount filter)", () => {

    const filterValues = {
        text: "",
        startDate: null,
        endDate: null,
        sortBy: "amount"
    };

    expect(filter(expenses, filterValues)).toEqual(expenses.slice().reverse());
});

test("Filter Fuction test (sortByDate filter)", () => {

    const filterValues = {
        text: "",
        startDate: null,
        endDate: null,
        sortBy: "date"
    };
    expect(filter(expenses, filterValues)).toEqual(expenses.slice().reverse());
});