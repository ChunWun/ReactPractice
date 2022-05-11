import ExpenseBlock from "./components/ExpenseBlock.js";

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
			<ExpenseBlock items={expenses} />
		</div>
	);
}

export default App;
