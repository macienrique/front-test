import React from 'react';

const PossibleValues = (props) => {
	const italic = props.value.includes('{') && props.value.includes('}');

	return (
		<div style={style}>
			<span style={{ width: '30%', fontStyle: italic && 'italic' }}>{props.value}</span>
			<span style={{ width: '70%' }}>{props.description}</span>
		</div>
	);
};

const style = {
	display: 'inline-flex',
	paddingLeft: '10px',
	paddingBottom: '10px',
	alignItems: 'center',
	fontSize: '12px'
};

export default PossibleValues;
