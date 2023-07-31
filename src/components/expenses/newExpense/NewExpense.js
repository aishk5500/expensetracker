import React, { useState } from "react";
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props) => {
    const [clicked, setClicked] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    const formButtonHandler = () => {
        // <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        console.log("Inside formButtonHandler");
        setClicked(true)
    }
    const handleCancel = () => {
        setClicked(false);
    }
    return (
        <div className='new-expense'>
            {clicked ? <ExpenseForm clicked={handleCancel} onSaveExpenseData={saveExpenseDataHandler} /> : <button onClick={formButtonHandler}>Add New Expense</button>}
        </div>
    );
};

export default NewExpense;
