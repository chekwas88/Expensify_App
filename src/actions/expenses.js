import database from '../firebase/firebase';

export const addExpense = (expense) => ({

    type: 'ADD_EXPENSE',
    expense


});

export const startAddExpense = (expenseData = {}) => {
    return dispatch => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };
        return database.ref('expense').push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            })

    }
}

//SET_EXPENSE

export const setExpense = (expenses) => ({
    type: 'SET_EXPENSE',
    expenses
});

export const startSetExpense = () => {
    return dispatch => {
        return database.ref('expense').once('value').then((snapshot) => {
            const expense = []
            snapshot.forEach((childSnapshot) => {
                expense.push({
                    id: childSnapshot.id,
                    ...childSnapshot.val()

                });
            });

            dispatch(setExpense(expense));
        });
    }
};



export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Edit expense

export const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update

});