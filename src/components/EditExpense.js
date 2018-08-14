import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

const EditExpense = props => {
  //console.log(props)
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.startEditExpenses(props.expense.id, expense);
          props.history.push("/");
        }}
      />

      <button
        onClick={() => {
          props.startRemoveExpenses(props.expense.id);
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    startRemoveExpenses: (data) => (dispatch(startRemoveExpense(data))),
    startEditExpenses: (id, update) => (dispatch(startEditExpense(id, update)))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
