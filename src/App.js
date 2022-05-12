import ExpenseBlock from "./components/Expenses/ExpenseBlock.js";
import NewExpense from "./components/NewExpense/NewRxpense.js";

function App() {

	const expenses = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			price: 94.12,
			date: new Date(2020, 7, 14),
		}
	];

	return (
		<div>
			<NewExpense />
			<ExpenseBlock items={expenses} />
		</div>
	);
}

export default App;
