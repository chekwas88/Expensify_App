//set text filter
export const setFilterText = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//sortby amount

export const sortByAmount = () => ({
    type: 'AMOUNT'
});

// sortby date

export const sortByDate = () => ({
    type: 'DATE'
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
  });
  
  // SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
  });


