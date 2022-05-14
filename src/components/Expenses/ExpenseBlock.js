import ExpenseItem from "./ExpenseItem.js";
import "./ExpenseBlock.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.js";
import { useState } from "react";

const ExpenseBlock = (props) => {

	const [year, setSlectYear] = useState('2019');
	const [showExpenses, setShowExpenses] = useState(props.items);

	const onSlectYearHandler = (event) => {
		setSlectYear(event);
		checkShowExpenses(event);
	}

	const checkShowExpenses = (year) => {
		setShowExpenses(() => {
			return (
				props.items.filter(expenseItem => expenseItem.date.getFullYear().toString() === year)
			);
		});
	}

	return (
		<Card className="expense-block">
			<ExpensesFilter selectYear={onSlectYearHandler} />
			{
				showExpenses.map((expenseItem) => {
					return (
						<ExpenseItem
							key={expenseItem.id}
							title={expenseItem.title}
							price={expenseItem.price}
							date={expenseItem.date}
						/>
					)
				})
			}
		</Card>
	);
}

export default ExpenseBlock;