
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter  from './router/AppRouter';
import configureStore from './stores/configurestore';
import {addExpense} from './actions/expenses';
import {setFilterText} from './actions/filter';
import getVisibleExpenses from './selectors/filteredexpenses';
//import 'normalize.css/normalize.css';
import './styles/main.scss';



const store = configureStore();


store.dispatch(addExpense({description: 'water bill', amount: 300, createdAt:1000}));
store.dispatch(addExpense({description: 'Gas bill', amount: 200, createdAt:2000}));
store.dispatch(addExpense({description: 'rent', amount: 111300, createdAt:3000}));



const state = store.getState()

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
);

 
  
ReactDOM.render(jsx, document.getElementById("app"));
