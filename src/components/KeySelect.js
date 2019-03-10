import React from 'react';

import { PRIMARY_COLOR } from '../util/constants';

const KeySelect = (props) => {
	const { selected, value, handleChange, tag } = props;
	const clicked = selected === value ? true : false;

	return (
		<div
			className="keySelect"
			onClick={() => handleChange(value, tag)}
			style={{ backgroundColor: clicked && PRIMARY_COLOR }}
		>
			<span>{tag}</span>
			{clicked && <span>&rsaquo;</span>}
		</div>
	);
};

export default KeySelect;
