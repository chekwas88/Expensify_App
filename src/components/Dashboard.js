import React from 'react';
import ConnectedExpenseList from './ExpensesList';
import ConnectedExpenseFilter from './ExpenseListFilter';
const Dashboard = (props) =>(
    <div>
      <ConnectedExpenseFilter />
      <ConnectedExpenseList />
    </div>
  );


export default Dashboard;  