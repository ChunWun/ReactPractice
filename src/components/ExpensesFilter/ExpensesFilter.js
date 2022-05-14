import { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = () => {

	const [selectYear, setSelectYear] = useState(2019);

	const onSelectedHandler = (event) => {
		setSelectYear(event.target.value);
		console.log(selectYear);
	}

	return (
		<form className=".expenses-filter">
			<div className=".expenses-filter__control">
				<label className="expenses-filter label">Filter By Year</label>
				<select name="selectYear" onChange={onSelectedHandler}>
					<option value="2019">2019</option>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
				</select>
			</div>
			<div>

			</div>
		</form>
	);
}

export default ExpensesFilter;