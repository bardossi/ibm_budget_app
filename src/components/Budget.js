import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        // check the budget is not less than the total expenses
        if (event.target.value >= totalExpenses) {
            setNewBudget(event.target.value);
        }
        else {
            alert("You cannot reduce the budget value lower than the spending")
        }
        //setNewBudget(event.target.value);
        console.log(event.target.value)

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget:</span>
            <label htmlFor='budget' style={{ marginLeft: "1rem" }}>{currency} </label>
            <input type="number" id="budget" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
