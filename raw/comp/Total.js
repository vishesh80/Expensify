import React from 'react';
import filter from '../modules/filter';
import { NavLink } from 'react-router-dom';

const Total = props => {

    const array = filter(props.expenses, props.filters);
    const length = array.length;
    
    return (
    <div className="total">
            <p>Viewing <strong>{length}</strong>{(length === 1) ? " expense" : " expenses"} totalling ₹<strong>{
                array
                    .map(e => Number(e.amount))
                    .reduce((sum, value) => sum + value, 0)
            }</strong></p>

            <NavLink to="/create" exact={true} className="btn">Create Expense</NavLink>
    </div>
    );
}

export default Total;
 

