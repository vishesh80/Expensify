import React from 'react';
import ExpenseForm from '../ExpenseForm';
import { connect } from 'react-redux';
import { add } from '../../modules/actions';

const c = p => (

<div>
    <h1>Create account</h1>
        <ExpenseForm submit={expense => { p.dispatch(add(expense)); p.history.push('/')}}/>
</div>);

export default connect()(c);