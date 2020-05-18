import React from 'react';
import ExpenseForm from '../ExpenseForm';
import { connect } from 'react-redux';
import { edit } from '../../modules/actions';

const Edit = p =>  (
    <div>
        <h1>Edit Expense Item</h1>
        <ExpenseForm 
                initialState = {p.expenses.filter(e => p.match.params.id === e.id)[0]} 
                submit = {changes => {changes.id = p.match.params.id; p.dispatch(edit(changes)); p.history.push('/');}}
        />
    </div>);
    


function stateToProps(state) {

    return {
        expenses: state.expenses,
    };
}

export default connect(stateToProps)(Edit);