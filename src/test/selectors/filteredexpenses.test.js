import filteredexpenses from '../../selectors/filteredexpenses';
import moment from 'moment';


const expenses = [

    {
        id: 23,
        description: 'solar panel',
        note: '',
        createdAt: moment(0),
        amount: 100
    },

    {
        id: 2019,
        description: 'rent',
        note: '',
        createdAt: moment(0).subtract(4, 'days').valueOf(),
        amount: 928
    },

    {
        id: 2312,
        description: 'maintenance',
        note: '',
        createdAt: moment(0).add(4, 'days').valueOf(),
        amount: 36
    }
]

test('should return filteredexpenses object of text', () =>{
    const filter = {
        text: 't',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const dateFilteredExpense = filteredexpenses(expenses, filter);
    expect(dateFilteredExpense).toEqual([expenses[2], expenses[1]]);    
});

test('should return filteredexpenses object of start-time', () =>{
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const startDateFilteredExpense = filteredexpenses(expenses, filter);
    expect(startDateFilteredExpense).toEqual([expenses[2], expenses[0]]);    
});

test('should return filteredexpenses object of end-time', () =>{
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };

    const endDateFilteredExpense = filteredexpenses(expenses, filter);
    expect(endDateFilteredExpense).toEqual([expenses[0], expenses[1]]);    
});



test('should return filteredexpenses object of sortBy date', () =>{
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const sortByDateFilteredExpense = filteredexpenses(expenses, filter);
    expect(sortByDateFilteredExpense).toEqual([expenses[2], expenses[0], expenses[1]]);    
});



test('should return filteredexpenses object of sortBy amount', () =>{
    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const sortByAmountFilteredExpense = filteredexpenses(expenses, filter);
    expect(sortByAmountFilteredExpense).toEqual([expenses[1], expenses[0], expenses[2]]);    
});