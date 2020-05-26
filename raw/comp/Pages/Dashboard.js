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
    <Total {...props}/>
    <Filters/>
    <ul className="expenses">
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