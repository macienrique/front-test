import React from 'react';
import KeySelect from './KeySelect';
import ManageDataContent from './ManageDataContent';
import AddItem from './AddItem';

import { BORDER_STYLE, TAG_ARRAY } from '../util/constants';

const ManageData = (props) => {
	const { keySelect, handleChange, handleEdit, data, edit } = props;

	return (
		<div>
			<h1 style={style.h1}>Manage data</h1>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div>
					{TAG_ARRAY.map((val, index) => (
						<KeySelect
							selected={keySelect}
							key={index}
							value={index}
							tag={val}
							handleChange={handleChange}
						/>
					))}
					{!edit && <AddItem name="Add key" width="35%" />}
				</div>
				<ManageDataContent data={data} handleEdit={handleEdit} edit={edit} />
			</div>
		</div>
	);
};

const style = {
	h1: {
		borderBottom: BORDER_STYLE,
		paddingBottom: '20px'
	}
};

export default ManageData;
