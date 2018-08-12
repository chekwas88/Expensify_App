import React from "react";
import ConnectedExpenseList from "./ExpensesList";
import ConnectedExpenseFilter from "./ExpenseListFilter";
import ExpenseSumary from "./ExpenseSummary";
const Dashboard = props => (
  <div>
    <ExpenseSumary />
    <ConnectedExpenseFilter />
    <ConnectedExpenseList />
  </div>
);

export default Dashboard;
