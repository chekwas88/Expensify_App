import React from 'react';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';
import Header from '../components/Header';
import AddNewExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Dashboard from '../components/Dashboard';
import Help from '../components/Help';
import NotFoundPage from '../components/NotFound';
  

const AppRouter = (props) => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Dashboard} exact={true}/>
        <Route path='/create' component={AddNewExpense}/>
        <Route path='/edit/:id' component={EditExpense}/>
        <Route path='/help' component={Help}/>
        <Route component={NotFoundPage}/>
      </Switch> 
    </div>
     
  </BrowserRouter>
  
); 

export default AppRouter;