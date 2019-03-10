import React from 'react';
import addItem from '../images/addItem.svg';

const AddItem = (props) => {
	return (
		<div id="addItem" style={{ ...style.div, width: props.width }}>
			<img style={style.img} src={addItem} alt="" />
			<span>{props.name}</span>
		</div>
	);
};

const style = {
	div: {
		display: 'flex',
		justifyContent: 'space-around',
		border: '1px solid black',
		padding: '7px',
		marginTop: '12px',
		fontSize: '8px'
	},
	img: {
		width: '10px',
		height: '10px'
	}
};

export default AddItem;
