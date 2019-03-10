import React from 'react';
import { PRIMARY_COLOR } from '../util/constants';

const TableHeader = (props) => {
	return (
		<div
			style={{
				display: 'flex',
				backgroundColor: PRIMARY_COLOR,
				color: 'white',
				marginTop: '10px'
			}}
		>
			<h4 style={{ margin: '15px' }}>{props.name}</h4>
		</div>
	);
};

export default TableHeader;
