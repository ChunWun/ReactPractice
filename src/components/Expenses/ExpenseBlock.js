import ExpenseItem from "./ExpenseItem.js";
import "./ExpenseBlock.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.js";

const ExpenseBlock = (props) => {
	return (
		<Card className="expense-block">
			<ExpensesFilter />
			{props.items.map((expenseItem) => {
				return (
					<ExpenseItem
						key={expenseItem}
						title={expenseItem.title}
						price={expenseItem.price}
						date={expenseItem.date}
					/>
				)
			})}
		</Card>
	);
}

export default ExpenseBlock;