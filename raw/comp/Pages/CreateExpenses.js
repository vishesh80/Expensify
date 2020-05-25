import "@babel/polyfill";
import React from 'react';
import Header from '../Header';
import ExpenseForm from '../ExpenseForm';
import { connect } from 'react-redux';
import { addToFirebase } from '../../modules/actions';

const c = p => (

<div>
    <Header />
    <h1>Create account</h1>
        <ExpenseForm submit={expense => addToFirebase(expense, p.dispatch,p.uid)
                                        .then(m => p.history.push('/dashboard'))
                                        .catch(err => console.log(err))}
        />

</div>);

const mapStateToProps = state => ({

    uid: state.auth.uid
});

export default connect(mapStateToProps)(c);