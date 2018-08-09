import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('Should return a removeExpense object', () =>{
   const removeAction = removeExpense('11212');
   expect(removeAction).toEqual({
       type: 'REMOVE_EXPENSE',
       id:'11212'
   }); 
});

test('Should return a editExpense object', () =>{
    const editAction = editExpense('11212',  {note: 'noted', amount: 100.68});
    expect(editAction).toEqual({
        type: 'EDIT_EXPENSE',
        id:'11212',
        update: {
            note: 'noted',
            amount:100.68
        }
    }); 
 });

 test('should return addExpense objected with provided values', () =>{
     const expectedValue = {
         description:  'Batman Mobil',
         note: 'Mobil for city patrol',
         createdAt: 1000,
         amount: 1000
     };

     const addAction = addExpense(expectedValue);
     expect(addAction).toEqual({
         type: 'ADD_EXPENSE',
         expense: {
             ...expectedValue,
             id: expect.any(String)
         }
     });
 });

 test('should return addExpense objected with default value', () =>{
     const addAction = addExpense();
     expect(addAction).toEqual({
         type: 'ADD_EXPENSE',
         expense: {
             id: expect.any(String),
             description: '',
             note: '',
             createdAt: 0,
             amount:0
         }
     });
 });