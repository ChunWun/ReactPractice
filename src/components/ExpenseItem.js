import './ExpenseItem.css'

const ExpenseItem = () => {
	return (
		<div className='expense-item'>
			<div>Date</div>
			<div className='expense-item__description'>
				<h2> Item Name</h2>
				<div className='expense-item__price'> price </div>
			</div>
		</div>

	)
}

export default ExpenseItem;