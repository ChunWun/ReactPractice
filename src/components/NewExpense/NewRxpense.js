import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


const NewExpense = (props) => {
	const [isStartAddExpense, startAddExpense] = useState( false );
	const onSubnmitExpenseHandler = (newExpense) => {
		let expense = {
			...newExpense,
			id: 'test'
		}

		props.onAddExpense(expense);
		startAddExpense(false);
	}

	const onAddNewExpenseHandler = () => {
		startAddExpense(true);
	}

	const onCancelAddNewExpenseHandler = () => {
		startAddExpense(false);
	}

	const showExpenseForm = () => {
		if(isStartAddExpense){
			return <ExpenseForm 
			onSubnmitExpense={onSubnmitExpenseHandler} 
			onCancelAddNewExpense = {onCancelAddNewExpenseHandler}
			/>
		} else {
			return <button className="new-expense__actions" onClick={onAddNewExpenseHandler}>Add New Expense</button>
		}
	}

	return (
		<div className="new-expense">
			{showExpenseForm()}
		</div>
	);
}

export default NewExpense;