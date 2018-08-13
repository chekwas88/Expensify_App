import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import { startSetExpense } from './actions/expenses'
import configureStore from "./stores/configurestore";
//import 'normalize.css/normalize.css';
import "./styles/main.scss";
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading</p>, document.getElementById("app"));

store.dispatch(startSetExpense()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});


