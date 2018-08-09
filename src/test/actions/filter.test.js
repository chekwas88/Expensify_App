import {setEndDate,setFilterText,setStartDate,sortByAmount,sortByDate,} from '../../actions/filter';
import moment from 'moment'

test('Should return sortByAmount object', ()=>{
    const amountFilter = sortByAmount();
    expect(amountFilter).toEqual({
        type: 'AMOUNT'
    })
});

test('Should return sortByDate object', ()=>{
    const dateFilter = sortByDate();
    expect(dateFilter).toEqual({
        type: 'DATE'
    })
});

test('should return setStartDate object', () =>{
    const startDateFilter = setStartDate(moment(0));
    expect(startDateFilter).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should return setStartDate object', () =>{
    const endDateFilter = setEndDate(moment(0));
    expect(endDateFilter).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});


test('should return setFilterText object from provided value', () =>{
    const textFilter = setFilterText('bill');
    expect(textFilter).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'bill'
    });
});


test('should return setFilterText object from default value', () =>{
    const textFilter = setFilterText();
    expect(textFilter).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});