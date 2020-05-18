import { v4 as uuid } from 'uuid';
import moment from 'moment';

function add({ description = "", amount = 0, note = "", id = uuid(), createdAt = 0 } = {}) {
    return { type: "ADD", expense: { description, amount, note, id, createdAt } };
}


function edit({ description, amount, note,createdAt, id } = {}) {

    let temp = {};

    if (description) temp.description = description;
    if (amount) temp.amount = amount;
    if (note) temp.note = note;
    if(createdAt) temp.createdAt = createdAt;

    return { type: "EDIT", id, edits: Object.assign({}, temp) };
}

function remove(id) {

    return { type: "REMOVE", id };
}


// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});


export {
        add,
        edit,
        remove,
        
        setTextFilter,
        setStartDate,
        setEndDate,
        sortByAmount,
        sortByDate
     };