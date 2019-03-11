import React from 'react';
import { STATUS_COLORS } from '../util/constants';

const PendingRequest = (props) => {
	const { date, reason, status } = props.req;

	return (
		<div style={style.content}>
			<span style={{ width: '25%', fontSize: '12px' }}>{date}</span>
			<span style={{ width: '65%', fontSize: '12px' }}>{reason}</span>
			<div
				style={{
					...style.status,
					backgroundColor: STATUS_COLORS[status]
				}}
			>
				<span>{status}</span>
			</div>
		</div>
	);
};

const style = {
	content: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '90%',
		fontSize: '10px',
		marginLeft: '10px',
		marginTop: '10px'
	},
	status: {
		display: 'flex',
		justifyContent: 'center',
		width: '10%',
		paddingTop: '5px',
		paddingBottom: '5px',
		color: 'white'
	}
};

export default PendingRequest;
