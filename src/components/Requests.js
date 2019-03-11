import React from 'react';
import RequestTab from './RequestTab';
import TableHeader from './TableHeader';
import PendingRequest from './PendingRequest';

import { REQUESTS_ARRAY, BORDER_STYLE } from '../util/constants';
import { REQUEST_DATA } from '../util/pageData';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0,
			filter: 'all'
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(selectedIndex, filter) {
		this.setState({ selectedIndex, filter: filter.toLowerCase() });
	}
	render() {
		const { selectedIndex, filter } = this.state;
		const all = filter === 'all';
		return (
			<div>
				<h1 style={style.h1}>Requests</h1>
				<div style={style.content}>
					<div style={style.tabs}>
						{REQUESTS_ARRAY.map((val, index) => (
							<RequestTab
								key={index}
								index={index}
								selectedIndex={selectedIndex}
								name={val}
								handleChange={this.handleChange}
							/>
						))}
					</div>
					<TableHeader name="PENDING REQUESTS" />
					<div style={style.possibleValue}>
						<h4 style={{ ...style.h4, width: '25%' }}>DATE</h4>
						<h4 style={{ ...style.h4, width: '65%' }}>REASON</h4>
						<h4 style={{ ...style.h4, width: '10%' }}>STATUS</h4>
					</div>
					{REQUEST_DATA.filter((val) => all || val.status.toLowerCase() === filter).map((val, index) => (
						<PendingRequest key={index} req={val} />
					))}
				</div>
			</div>
		);
	}
}

const style = {
	content: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '750px',
		minHeight: '650px',
		height: '80vh'
	},
	tabs: {
		display: 'flex',
		width: '100%',
		borderBottom: BORDER_STYLE
	},
	h1: {
		marginBottom: '0px'
	},
	h4: {
		marginBottom: '10px',
		marginTop: '10px'
	},
	possibleValue: {
		display: 'flex',
		width: '90%',
		marginLeft: '10px'
	}
};

export default App;
