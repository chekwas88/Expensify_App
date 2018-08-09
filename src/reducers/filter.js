import moment from 'moment';
const filterdefault = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

const filterReducer = (state = filterdefault, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }

        case 'AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
            
        case 'DATE':
            return {
                ...state,
                sortBy: 'date'
            };  
        
        case 'SET_START_DATE':
            return {
              ...state,
              startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
              ...state,
              endDate: action.endDate    
            };

        default:
            return state;
    }
}

export default filterReducer;
