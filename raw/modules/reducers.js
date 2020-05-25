import moment from 'moment';

// Reducers 

const defaultFilter = {

    text: "",
    startDate: null,
    endDate: null,
    sortBy: "amount"
};


const ER = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.expense];

        case 'GET_VALUES':
            return [...action.expenses];

        case 'EDIT':
            return state.map(e => {

                if (e.id === action.id) return Object.assign({}, e, action.edits);
                return e;
            });

        case 'REMOVE':
            return state.filter(e => e.id !== action.id);

        default: return state;
    }
};


const AR = (state = {}, action) => {

    switch (action.type) {

        case 'LOGIN':
            return {uid: action.uid};

        case 'LOGOUT':
            return {};

        default: return state;
    }
};

const FR = (state = defaultFilter, action) => {

    switch (action.type) {

        case 'SET_TEXT_FILTER':
            return Object.assign({}, state, { text: action.text });

        case 'SORT_BY_AMOUNT':
            return Object.assign({}, state, { sortBy: 'amount' });

        case 'SORT_BY_DATE':
            return Object.assign({}, state, { sortBy: 'date' });

        case 'SET_START_DATE':
            return Object.assign({}, state, { startDate: action.startDate });

        case 'SET_END_DATE':
            return Object.assign({}, state, { endDate: action.endDate });

        default: return state;
    }
};


export {ER , FR , AR};