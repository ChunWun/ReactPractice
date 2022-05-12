import "./ExpenseForm.css";

const ExpenseForm = () => {

	const updateTitleHandler = (event) => {
		console.log(event.target.value);
	}

	return (
		<div className="new-expense__controls">
			<div className="new-expense__control">
				<div> Title </div>
				<input type="text" onChange={updateTitleHandler} ></input>
			</div>

			<div className="new-expense__control">
				<div> Price </div>
				<input type="number" ></input>
			</div>

			<div className="new-expense__control">
				<div> Date </div>
				<input type="date" ></input>
			</div>

		</div>
	);
}

export default ExpenseForm;