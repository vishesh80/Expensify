//import "@babel/polyfill";
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import { database } from './firebase'; 

function add({ description = "", amount = 0, note = "", id, createdAt = 0 } = {}) {
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

/*---------------------------------Firebase Actions------------------------------------------ */

async function addToFirebase({ description = "", amount = 0, note = "",  createdAt } = {} ,dispatch,uid)
{
    let snapshot = await database.ref('users/'+uid+'/expenses')
    .push({description,amount,note,createdAt: createdAt.valueOf()});
    
    dispatch(add({id: snapshot.key,description,amount,note,createdAt}));

    return "added to firebase";
    
}

async function getAllExpenses(dispatch,uid)
{
    let snapshot = await database.ref('users/'+uid+'/expenses').once('value');
    let tempArray = [];

    snapshot.forEach(child => {tempArray.push({id: child.key , ...child.val()});});

    tempArray = tempArray.map(e => ({...e,amount: Number(e.amount), createdAt: moment(e.createdAt)}));
    

    dispatch({type: "GET_VALUES" , expenses : tempArray});
}


async function removeFromFirebase(id , dispatch , uid) {
     
    await database.ref('users/'+uid+'/expenses/'+id).remove();

    dispatch(remove(id));

    return "removed from the firebase";
}

async function updateFirebase(changes,id,dispatch,uid) {

    changes.createdAt = changes.createdAt.valueOf();
    await database.ref('users/'+uid+'/expenses/' + id).update(changes);

    changes.id = id;
    changes.createdAt = moment(changes.createdAt);
    dispatch(edit(changes));

    return "Firebase updated";

}

/*---------------------------------Firebase Auth Actions-------------------------------------- */


function login(uid) {

    return { type: "LOGIN", uid };
}

function logout() {

    return { type: "LOGOUT"};
}


/*----------------------------------FilterSet actions----------------------------------------- */

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

        addToFirebase,
        getAllExpenses,
        removeFromFirebase,
        updateFirebase,

        login,
        logout,
        
        setTextFilter,
        setStartDate,
        setEndDate,
        sortByAmount,
        sortByDate
     };