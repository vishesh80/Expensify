import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {removeFromFirebase} from '../modules/actions'


export const ExpenseItem = ({ description, amount, id, createdAt, dispatch,uid}) => (
    <li>
        <h1>{description}</h1>
        <p>{amount + "$ - "+ createdAt.format("Do MMMM YYYY")}</p>
        <button onClick={e => removeFromFirebase(id,dispatch,uid).catch(err => console.log(err))}>Remove</button>
        <NavLink to={"/edit/"+id} exact={true}>Edit</NavLink>
    </li>
);

const mapStateToProps = state => ({

    uid: state.auth.uid
});
export default connect(mapStateToProps)(ExpenseItem);