import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

	const [userInputData, setUserInputData] = useState({
		setTitle: '',
		setPrice: '',
		setDate: ''
	});

	const userInputHandler = (event) => {

		/* type A */
		// setUserInputData({
		// 	setTitle: (event.target.type === 'text') ? event.target.value : userInputData.setTitle,
		// 	setPrice: (event.target.type === 'number') ? event.target.value : userInputData.setPrice,
		// 	setDate: (event.target.type === 'date') ? event.target.value : userInputData.setDate
		// });

		// type B
		setUserInputData((prevState) => {
			return ({
				...prevState,
				setTitle: (event.target.type === 'text') ? event.target.value : userInputData.setTitle,
				setPrice: (event.target.type === 'number') ? event.target.value : userInputData.setPrice,
				setDate: (event.target.type === 'date') ? event.target.value : userInputData.setDate
			})
		})
	}

	const submitHandler = (event) => {

		// this syntax avoiding refresh whole website again
		event.preventDefault();

		const expenseData = {
			title: userInputData.setTitle,
			price: userInputData.setPrice,
			date: new Date(userInputData.setDate)
		};

		props.onSubnmitExpense(expenseData);
		clearInputData();

	}

	const clearInputData = () => {
		setUserInputData(() => {
			return ({
				setTitle: '',
				setPrice: '',
				setDate: ''
			})
		})
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<div> Title </div>
					<input type="text" value={userInputData.setTitle} onChange={userInputHandler} ></input>
				</div>

				<div className="new-expense__control">
					<div> Price </div>
					<input type="number" value={userInputData.setPrice} min={0} onChange={userInputHandler}></input>
				</div>

				<div className="new-expense__control">
					<div> Date </div>
					<input type="date" value={userInputData.setDate} onChange={userInputHandler}></input>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={props.onCancleAddNewExpense}>Cancel</button>
				<button type='submit'> Add </button>
			</div>
		</form>

	);
}

export default ExpenseForm;