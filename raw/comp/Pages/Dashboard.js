import React from 'react';
import {connect} from 'react-redux';

import Header from '../Header';
import ExpenseItem from '../ExpenseItem';
import Filters from '../Filters';
import filter from '../../modules/filter';
import Total from '../Total';

export let d = (props) => (

<div>
    <Header />
    <h1>Dashboard</h1>
    <Total {...props}/>
    <Filters/>
    <ul>
        {filter(props.expenses,props.filters).map(i => <ExpenseItem key={i.id} {...i}/>)}
    </ul>
</div>

);

function stateToProps(state)
{
    return {expenses : state.expenses,
            filters : state.filters
        };
}

export default connect(stateToProps)(d);