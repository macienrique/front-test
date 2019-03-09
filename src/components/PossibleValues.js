import React from 'react';

const PossibleValues = (props) => {
	return (
		<div style={styles}>
			<span style={{ width: '30%' }}>{props.value}</span>
			<span style={{ width: '70%' }}>{props.description}</span>
		</div>
	);
};

const styles = {
	display: 'inline-flex',
	paddingLeft: '10px',
	paddingBottom: '10px',
	alignItems: 'center',
	fontSize: '12px'
};

export default PossibleValues;
