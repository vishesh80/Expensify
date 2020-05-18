import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {remove} from '../modules/actions'


export const ExpenseItem = ({ description, amount, id, createdAt, dispatch}) => (
    <li>
        <h1>{description}</h1>
        <p>{amount + "$ - "+ createdAt.format("Do MMMM YYYY")}</p>
        <button onClick={e => dispatch(remove(id))}>Remove</button>
        <NavLink to={"/edit/"+id} exact={true}>Edit</NavLink>
    </li>
);

export default connect()(ExpenseItem);