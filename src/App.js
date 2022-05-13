import { useState } from "react";
import ExpenseBlock from "./components/Expenses/ExpenseBlock.js";
import NewExpense from "./components/NewExpense/NewRxpense.js";

function App() {

	// const [expenses, setExpensesList] = useState(
	// 	[
	// 		{
	// 			id: 'e1',
	// 			title: 'Toilet Paper',
	// 			price: 94.12,
	// 			date: new Date(2020, 7, 14),
	// 		}
	// 	]
	// );

	const expenses = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			price: 94.12,
			date: new Date(2020, 7, 14),
		}
	];

	const onAddExpenseHandler = (newExpense) => {
		// setExpensesList((prevState) => {
		// 	return ({
		// 		...prevState,

		// 		newExpense

		// 	})

		// });

		expenses.push(newExpense);
		console.log(expenses);
	}

	return (
		<div>
			<NewExpense onAddExpense={onAddExpenseHandler} />
			<ExpenseBlock items={expenses} />
		</div>
	);
}

export default App;
