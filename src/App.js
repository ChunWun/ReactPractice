import { useState } from "react";
import ExpenseBlock from "./components/Expenses/ExpenseBlock.js";
import NewExpense from "./components/NewExpense/NewRxpense.js";

function App() {

	const [expenses, setExpensesList] = useState(
		[
			{
				id: 'e1',
				title: 'Toilet Paper',
				price: 94.12,
				date: new Date(2020, 7, 14),
			},
			{
				id: 'e2',
				title: 'Toilet',
				price: 94.12,
				date: new Date(2019, 7, 14),
			}
		]
	);

	const onAddExpenseHandler = (newExpense) => {
		setExpensesList((prevState) => {
			return ([
				...prevState,
				{
					id: newExpense.id,
					title: newExpense.title,
					price: newExpense.price.toString(),
					date: new Date(newExpense.date),

				}
			])

		});
	}

	return (
		<div>
			<NewExpense onAddExpense={onAddExpenseHandler} />
			<ExpenseBlock items={expenses} />
		</div>
	);
}

export default App;
