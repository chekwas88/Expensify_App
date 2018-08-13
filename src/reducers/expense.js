
const expensedefault = [];

const expenseReducer = (state = expensedefault, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => (id !== action.id));

        case 'SET_EXPENSE':
            return action.expenses;

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.update
                    }
                } else {
                    return expenses;
                }
            })

        default:
            return state;
    }
}

export default expenseReducer