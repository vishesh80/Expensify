import React from 'react';
import Header from '../Header';
import ExpenseForm from '../ExpenseForm';
import { connect } from 'react-redux';
import { updateFirebase } from '../../modules/actions';

const Edit = p =>  (
    <div>
        <Header/>
        <h1>Edit Expense Item</h1>
        <ExpenseForm 
                initialState = {p.expenses.filter(e => p.match.params.id === e.id)[0]} 
                
                submit={ changes => updateFirebase(changes,p.match.params.id,p.dispatch,p.uid)
                                    .then(m => p.history.push('/dashboard'))
                                    .catch(err => console.log(err))}
        />
    </div>);
    


function stateToProps(state) {

    return {
        expenses: state.expenses,
        uid: state.auth.uid
    };
}

export default connect(stateToProps)(Edit);