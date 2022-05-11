import ExpenseItem from "./ExpenseItem.js";
import "./ExpenseBlock.css";
import Card from "../UI/Card.js";

const ExpenseBlock = (props) => {
	return (
		<Card className="expense-block">
			<ExpenseItem
				title={props.items[0].title}
				price={props.items[0].price}
				date={props.items[0].date}
			/>
		</Card>
	);
}

export default ExpenseBlock;