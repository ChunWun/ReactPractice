import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


const NewExpense = (props) => {

	const onSubnmitExpenseHandler = (newExpense) => {
		let expense = {
			...newExpense,
			id: 'test'
		}

		props.onAddExpense(expense);
	}

	return (
		<div className="new-expense">
			<ExpenseForm onSubnmitExpense={onSubnmitExpenseHandler} />
		</div>
	);
}

export default NewExpense;