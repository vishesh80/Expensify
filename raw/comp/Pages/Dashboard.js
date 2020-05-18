import React from 'react';
import {connect} from 'react-redux';

import ExpenseItem from '../ExpenseItem';
import Filters from '../Filters';
import filter from '../../modules/filter';

export let d = (props) => (

<div>

    <h1>Dashboard</h1>
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