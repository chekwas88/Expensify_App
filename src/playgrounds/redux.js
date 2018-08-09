import { createStore} from 'redux';

const increment = (incrementBy = 1 ) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrement = (decrementBy = 10) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const reset = (resetval = 0) => ({
    type: 'RESET',
    resetval: resetval
});

const countReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: action.resetval
            };        
        default:
            return state;
        
   }

}   

const store = createStore(countReducer);




const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(increment( 5));

store.dispatch(increment());
//unsubscribe();


store.dispatch(reset(0));

store.dispatch(decrement(10))
    

store.dispatch(decrement());




