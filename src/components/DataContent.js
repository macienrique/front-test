import React from 'react';
import PossibleValues from './PossibleValues';
import Select from 'react-dropdown-select';

import { PRIMARY_COLOR, BORDER_STYLE } from '../util/constants';
import saveIcon from '../images/save.svg';

const DataContent = (props) => {
	return (
		<div style={style.content}>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<label>Key name</label>
					<input type="text" placeholder="Input key name" name="keyName" value={'hola'} />
				</div>

				<div id="saveTab">
					<img style={{ width: '14px', height: '14px' }} src={saveIcon} alt="" />Save
				</div>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<label>Description</label>
				<input
					type="text"
					placeholder="Contains the primary data used to identify"
					name="keyName"
					value={''}
					style={{ paddingBottom: '3vh' }}
				/>
			</div>

			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<label>type</label>
				<Select
					className="selectCustom"
					multi
					labelField="name"
					style={style.selectCustom}
					options={props.data}
					onChange={(values) => console.log(values)}
				/>
			</div>
			<div style={{ display: 'flex' }}>
				<label className="container">
					<input type="checkbox" />
					<span className="checkmark" />
				</label>
				<span style={{ paddingLeft: '30px' }}>Is this personal data?</span>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
				<div
					style={{
						display: 'flex',
						backgroundColor: PRIMARY_COLOR,
						color: 'white'
					}}
				>
					<h5 style={{ margin: '15px' }}>POSSIBLE VALUES</h5>
				</div>
				<div style={{ display: 'inline-flex', paddingLeft: '10px', alignItems: 'center' }}>
					<h5 style={{ width: '30%' }}>VALUE</h5>
					<h5 style={{ width: '70%' }}>DESCRIPTION</h5>
				</div>
				<PossibleValues value="null" description="Value when user is not found" />
				<PossibleValues value="{integer}" description="ID key of user" />
			</div>
		</div>
	);
};

const style = {
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
	},
	selectCustom: {
		borderTop: 'none',
		width: '20vw',
		borderBottom: '2px solid #ddd'
	}
};

export default DataContent;
