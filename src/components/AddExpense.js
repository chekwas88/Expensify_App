import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses';
const AddNewExpense = (props) => (
  <div>
    My Expense Page!!!!
      <ExpenseForm onSubmit={(expense) => {
      props.startAddExpense(expense)
      props.history.push('/')
    }} />
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense))

  }
}

export default connect(undefined, mapDispatchToProps)(AddNewExpense);