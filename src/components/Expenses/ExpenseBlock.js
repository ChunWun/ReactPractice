import ExpenseItem from "./ExpenseItem.js";
import "./ExpenseBlock.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.js";
import { useState } from "react";

const ExpenseBlock = (props) => {

	const [year, setSlectYear] = useState('2019');

	const onSlectYearHandler = (selectYear) => {
		setSlectYear(selectYear);
	}

	const showExpenses = () => {
		let expenses = props.items.filter(expenseItem => expenseItem.date.getFullYear().toString() === year);
		if(expenses.length > 0) {
			return (
				<li className="expenses-list">
					{expenses.map((expenseItem) => {
						return (
							<ExpenseItem
								key={expenseItem.id}
								title={expenseItem.title}
								price={expenseItem.price}
								date={expenseItem.date}
							/>
						)
					})}
				</li>	
			)
		} else return (
			<p className="expenses-list__fallback">No Expenses Found!</p>
		)
	}

	return (
		<Card className="expense-block">
			<ExpensesFilter selectYear={onSlectYearHandler} />
			{showExpenses()}
		</Card>
	);
}

export default ExpenseBlock;