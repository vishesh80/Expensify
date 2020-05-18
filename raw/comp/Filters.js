import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import {setTextFilter , sortByDate as sd, sortByAmount as sa,setEndDate,setStartDate} from '../modules/actions';

class Filters extends React.Component{

    constructor(p)
    {
        super();
        this.state = {
            startDate: p.startDate,
            endDate: p.endDate,
            focused: null
        };
    }

    render()
    {
        return (
            <div>
                <label>Set Text Filter</label>
                <input type="text" value={this.props.text} onChange={e => this.props.dispatch(setTextFilter(e.target.value))} />
                <br />
                <br />
                <label>Sort By</label>
                <select value={this.props.sortBy} onChange={e => (e.target.value === "amount") ? this.props.dispatch(sa()) : this.props.dispatch(sd())}>
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <br />
                <br />
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => {
                        
                        this.setState({ startDate, endDate });
                        this.props.dispatch(setStartDate(startDate));
                        this.props.dispatch(setEndDate(endDate));
                    }} 
                    focusedInput={this.state.focused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focused => this.setState({ focused })} // PropTypes.func.isRequired,
                    showClearDates={true}
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                />
            </div>
        ); 
    }
}  

const mapStateToProps = state => ({
    text: state.filters.text,
    sortBy : state.filters.sortBy,
    startDate : state.filters.startDate,
    endDate : state.filters.endDate
}); 


export default connect(mapStateToProps)(Filters);