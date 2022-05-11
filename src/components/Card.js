import "./Card.css"


const Card = (props) => {

	const classes = 'Card ' + props.className;
	console.log(classes);

	return (
		<div className={classes}>
			{props.children}
			{console.log(props)}
			{console.log(props.children)}
		</div>
	);
}

export default Card;