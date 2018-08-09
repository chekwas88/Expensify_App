import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import { setFilterText, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filter';


class ExpenseListFilter extends React.Component{
    state ={
        calenderFocused: null
    };

    onDatesChange = ({startDate, endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (focused) => {
        this.setState(() => ({calenderFocused : focused}))
    };

    render(){
        return(
            <div>
                <input type='text' value={this.props.filters.text} onChange = {(e) =>{
                    this.props.dispatch(setFilterText(e.target.value))
                }}/>
        
                <select value={this.props.filters.sortBy} onChange ={(e) =>{
                    if(e.target.value === 'amount'){
                        this.props.dispatch(sortByAmount());
                    }else if (e.target.value === 'date'){
                        this.props.dispatch(sortByDate());
                    }
                }}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>

                <DateRangePicker 
                    startDate = {this.props.filters.startDate}
                    startDateId = 'start_date_input'
                    endDate = {this.props.filters.endDate}
                    endDateId = 'end_date_input'
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calenderFocused}
                    onFocusChange = {this.onFocusChange}
                    showClearDates = {true}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                />
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilter);