import React from 'react';

import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

import 'react-dates/initialize';



class ExpenseForm extends React.Component
{
    constructor(props)
    {
        super();

        if(!props.initialState) this.state = {


            description: "",
            amount:  "",
            note: "",
            createdAt: moment(),

            focused: null

        };

        else this.state = {

            description: (props.initialState.description) ? props.initialState.description : "",
            amount: (props.initialState.amount) ? props.initialState.amount : "",
            note: (props.initialState.note) ? props.initialState.note : "",
            createdAt: (props.initialState.createdAt) ? props.initialState.createdAt : moment(),

            focused: null
        }

        this.onAchange = this.onAchange.bind(this);
        this.onNchange = this.onNchange.bind(this);
        this.onDchange = this.onDchange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onDchange(e){
        e.persist();
        this.setState(prev => ({
            description: e.target.value,
        }));
    }

    onAchange(e){
        e.persist();
        if(!(/^\d*(\.\d{0,2})?$/.test(e.target.value))) return;
        this.setState(prev => ({
            amount: e.target.value,
        }));
    }

    onNchange(e){
        e.persist();
        this.setState(prev => ({
            note: e.target.value,
        }));
    }

    onSubmit(e){
        e.persist();

        
        if(this.state.description && this.state.amount)
        {
            console.log(this.state.createdAt);
            if(!(/^[a-z\sA-Z]+$/.test(this.state.description.trim())) || 
               !(this.state.createdAt)) return alert("Fill the valid information.");
            
                this.props.submit({
                description : this.state.description,
                amount : this.state.amount,
                note: this.state.note,
                createdAt: this.state.createdAt
            });               
        }
        else return alert("Please Complete the form.");
    }

    render()
    {
        return (<div>
        <input type="text" value={this.state.description} placeholder="Description" onChange={this.onDchange}/><br />
        <input type="text" value={this.state.amount} placeholder="Amount" onChange={this.onAchange}/><br />

        <textarea cols="30" rows="10" value={this.state.note} placeholder="Note (optional)" onChange={this.onNchange}></textarea><br/>
            
        <SingleDatePicker
        date={this.state.createdAt} // momentPropTypes.momentObj or null
        onDateChange={date => this.setState({createdAt: date})} 
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({focused})} // PropTypes.func.isRequired
        numberOfMonths={1}
        isOutsideRange={d => false}
        id="your_unique_id" />
        <br/>

        <button onClick={this.onSubmit}>Submit</button>
        </div>);     
    }
}


export default ExpenseForm;