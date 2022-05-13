import ExpenseItem from "./ExpenseItem.js";
import "./ExpenseBlock.css";
import Card from "../UI/Card.js";

const ExpenseBlock = (props) => {
	console.log(props.items)
	return (
		<Card className="expense-block">
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