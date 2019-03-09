import React from 'react';

const KeySelect = (props) => {
	return (
		<div className="keySelect">
			<span>{props.name}</span>
			<span>&rsaquo;</span>
		</div>
	);
};

export default KeySelect;
