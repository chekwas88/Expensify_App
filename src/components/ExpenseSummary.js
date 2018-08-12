import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import filteredExpenses from "../selectors/filteredexpenses";
import expensesTotal from "../selectors/expenseTotal";

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const formattedExpenseTotal = numeral(expenseTotal).format("$0,0.00");
  const expenseWord = expenseCount > 1 ? "expenses" : "expense";

  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const filteredexpense = filteredExpenses(state.expenses, state.filters);

  return {
    expenseCount: filteredexpense.length,
    expenseTotal: expensesTotal(filteredexpense)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
