import moment from 'moment'

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const textmatch = expense.description.toLowerCase().includes(text.toLowerCase());
        const startdateMatch =  startDate? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const enddateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        return textmatch && startdateMatch && enddateMatch
    }).sort((a, b) =>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt? 1: -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount? 1: -1;
        }
    });
}

export default getVisibleExpenses;