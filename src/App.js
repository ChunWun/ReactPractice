import ExpenseItem from "./components/ExpenseItem.js";

function App() {

	//TODO
	const expenseItem = {
		date: new Date(2022, 5, 11),
		title: 'mask',
		price: 50
	}

	return (
		<div>
			<h2>Let's get started!</h2>
			<ExpenseItem date={expenseItem.date} title={expenseItem.title} price={expenseItem.price} />
		</div>
	);
}

export default App;
