import React from 'react';
import filter from '../modules/filter';

const Total = props => {

    const array = filter(props.expenses, props.filters);
    const length = array.length;
    
    return (
    <div>
        <h3>Viewing {(length === 1)? length+" expense": length+" expenses"} totalling ${
            array
            .map(e => Number(e.amount))
            .reduce((sum,value) => sum + value,0)
        }</h3>
    </div>
    );
}

export default Total;
 

