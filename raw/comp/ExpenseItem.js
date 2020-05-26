import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {removeFromFirebase} from '../modules/actions'


export const ExpenseItem = ({ description, amount, id, createdAt, dispatch,uid}) => (
    <li className="expense" >
        <div className="left">
            <h1>{description}</h1>
            <p>{createdAt.format("Do MMMM YYYY")}</p>
        </div>
        <div className="right">
            <div>
                <NavLink className="edit" to={"/edit/" + id} exact={true}>Edit</NavLink>
                <button className="remove"
                    onClick={e => removeFromFirebase(id, dispatch, uid).catch(err => console.log(err))}>X</button>
            </div>
            <p>{"₹" + amount}</p>
        </div>
    </li>
);

const mapStateToProps = state => ({

    uid: state.auth.uid
});
export default connect(mapStateToProps)(ExpenseItem);