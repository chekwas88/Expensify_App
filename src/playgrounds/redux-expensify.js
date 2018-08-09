import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const ADDEXPENSE = 'ADD_EXPENSE';
const REMOVEEXPENSE = 'REMOVE_EXPENSE';
const EDITEXPENSE = 'EDIT_EXPENSE';
const SETTEXTFILTER = 'SET_TEXT_FILTER';
const AMOUNT = 'AMOUNT';
const DATE = 'DATE';


const addExpense = (
    {
        description ='',
        note= '',
        amount = 0,
        createdAt = 0
    } = {}) => ({
        type: ADDEXPENSE,
        expense:{
            id:uuid(),
            description,
            note,
            amount,
            createdAt
        }
        
});

const removeExpense =(id)=>({
    type: REMOVEEXPENSE,
    id
});

//Edit expense

const editExpense = (id, update) =>({
    type: EDITEXPENSE,
    id,
    update

});

//set text filter
const setFilterText = (text) => ({
    type: SETTEXTFILTER,
    text
});

//sortby amount

const sortByAmount = () => ({
    type: AMOUNT
});

// sortby date

const sortByDate = () => ({
    type: DATE
});

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
  });
  
  // SET_END_DATE
  const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
  });





const expensedefault = [];

const filterdefault = {
    text: '',
    sortBy: 'date',
    startdate: undefined,
    enddate: undefined
}

const expenseReducer = (state = expensedefault, action) =>{
    switch(action.type){
        case ADDEXPENSE:
            return [
                ...state,
                action.expense
            ]
        case REMOVEEXPENSE:
            return state.filter(({id}) => (id !== action.id));
        
        case EDITEXPENSE:
            return state.map((expense) =>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.update
                    }
                }else{
                    return expense;
                }
            })    
               
        default:
            return state;
    }
}

const filterReducer = (state = filterdefault, action) => {
    switch(action.type){
        case SETTEXTFILTER:
            return {
                ...state,
                text: action.text
            }

        case AMOUNT:
            return {
                ...state,
                sortBy: 'amount'
            }
            
        case DATE:
            return {
                ...state,
                sortBy: 'date'
            };  
        
        case 'SET_START_DATE':
            return {
              ...state,
              startdate: action.startDate
            };
        case 'SET_END_DATE':
            return {
              ...state,
              enddate: action.endDate    
            };

        default:
            return state;
    }
}


const getVisibleExpenses = (expenses, {text, sortBy, startdate, enddate})=>{
    return expenses.filter((expense) => {
        const textmatch = expense.description.toLowerCase().includes(text.toLowerCase());;
        const startdateMatch = typeof startdate !== 'number' || expense.createdAt >= startdate;
        const enddateMatch = typeof enddate !== 'number' || expense.createdAt <= enddate;
        return textmatch && startdateMatch && enddateMatch
    }).sort((a, b) =>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt? 1: -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount? 1: -1;
        }
    });
}

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    }    
));

store.subscribe(()=> {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

 const exOne = store.dispatch(addExpense({description:'food', amount:100, createdAt:-21000}));
 const exTwo = store.dispatch(addExpense({description:'dfes', amount:200, createdAt: -1000}));
// const exThree = store.dispatch(addExpense({description:'quid', amount:300}));

// store.dispatch(removeExpense(exOne.expense.id));
// store.dispatch(editExpense(exTwo.expense.id, {amount: 700, note: 'awesome'}));
 store.dispatch(setFilterText('f'));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

 //store.dispatch(setStartDate(0)); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
 //store.dispatch(setEndDate(250)); // endDate 1250



//store.subscribe(()=>(console.log(store.getState())));







// const demoState = {
//     expenses:[{
//         id: 'kkssmcx',
//         description: 'payment for course',
//         note: 'blah blah for course',
//         amount: 57463,
//         createdAt: 0
//     }],

//     filter: {
//         text:'rent',
//         sortBy: 'amount',// amount or date
//         startDate: undefined,
//         endDate: undefined
//     }
// }