import React from 'react';
import KeySelect from './KeySelect';
import DataContent from './DataContent';

import { BORDER_STYLE } from '../util/constants';

const Manage = (props) => {
	return (
		<div>
			<h1 style={style.h1}>Manage data</h1>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div>
					<KeySelect name="user_id" />
					<KeySelect name="item_id" />
					<KeySelect name="user_email" />
					<KeySelect name="item_views" />
					<KeySelect name="item_favorites" />
				</div>
				<DataContent />
			</div>
		</div>
	);
};

const style = {
	h1: {
		borderBottom: BORDER_STYLE,
		paddingBottom: '20px'
	},
	content: {
		border: BORDER_STYLE,
		width: '78vw',
		height: '80vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingTop: '2vw',
		paddingLeft: '2vw',
		paddingRight: '2vw'
	}
};

export default Manage;
