import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            description: props.expense? props.expense.description : '',
            note: props.expense? props.expense.note : '',
            amount: props.expense? (props.expense.amount).toString() : '',
            createdAt: props.expense? moment(props.expense.createdAt) : moment(),
            calenderfocused: false,
            error: ''
        }
    }
    

     onDescriptionChange = (e) =>{
         const description = e.target.value
         this.setState(()=>({description}));
     };

     onNoteChange = (e) =>{
         const note = e.target.value;
         this.setState(() => ({note}))
     };

     onAmountChange = (e) =>{
         const amount = e.target.value;
         if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
             this.setState(() => ({amount}));
         }
        
     }

     onDateChange = (now) =>{
         if(now){
            this.setState(() => ({createdAt: now}));
         }
         
     }

     onFocusChange = ({focused}) =>{
         this.setState(() => ({calenderfocused:focused}));
     }

     onSubmit =(e) =>{
         e.preventDefault();
         if(!this.state.description || !this.state.amount){
            this.setState(()=> ({error: 'Please provide description and amount for the expense'}))
         }else{
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
         }
     }

    render() {
        return(
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
                <input type='text' placeholder='description' value={this.state.description} autoFocus onChange={this.onDescriptionChange}/>
                <input type='text' placeholder='amount' value={this.state.amount} onChange={this.onAmountChange}/>
                <SingleDatePicker
                    date={this.state.createdAt} 
                    onDateChange={this.onDateChange} // PropTypes.func.isRequired
                    focused={this.state.calenderfocused} // PropTypes.bool
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    
                />
                <textarea placeholder='Add note about the expense' value={this.state.note} onChange={this.onNoteChange}></textarea>
                <button>AddExpense</button>
            </form>
        </div>
    )}
}