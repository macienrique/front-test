import React from 'react';

const RequestTab = (props) => {
	const { name, index, selectedIndex, handleChange } = props;
	const selected = index === selectedIndex ? true : false;

	return (
		<h5
			key={index}
			id="requestTab"
			onClick={() => handleChange(index, name)}
			style={{ borderBottom: selected && '2px solid black' }}
		>
			{name}
		</h5>
	);
};

export default RequestTab;
