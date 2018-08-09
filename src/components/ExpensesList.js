import React from 'react';
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItems'
import filteredExpense from '../selectors/filteredexpenses'
const ExpenseList = (props) =>(
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
        
    </div>
);

 const mapStateToProps = (state, ownProps) => {
    return {
        expenses: filteredExpense(state.expenses, state.filters)
        
    };
}

export default connect(mapStateToProps)(ExpenseList);

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList);


