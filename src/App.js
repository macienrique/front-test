import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ManageData from './components/ManageData';
import Requests from './components/Requests';
import ComingSoon from './components/ComingSoon';
import { MANAGE_DATA } from './util/pageData';
import { TAG_ARRAY } from './util/constants';

import 'react-tabs/style/react-tabs.css';

import './stylesheets/App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keySelect: 0,
			tag: TAG_ARRAY[0],
			data: null,
			edit: false,
			loading: true
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	async handleChange(key, tag) {
		await this.setState({ keySelect: key, tag });
	}

	async handleEdit(modifiedState) {
		const { edit, ...newState } = modifiedState;
		if (edit) {
			let { data } = this.state;
			data[newState.key] = newState;
			await this.setState({ data });
		}

		await this.setState({ edit: !this.state.edit });
	}

	async componentWillMount() {
		// Simulating that MANAGE_DATA could be very big, I add a loading screen.
		await this.setState({ data: MANAGE_DATA, loading: false });
	}

	render() {
		const { keySelect, data, tag, edit, loading } = this.state;
		return loading ? (
			<div style={styles.loader}>
				<h1>LOADING...</h1>
				<div className="loader" />
			</div>
		) : (
			<Tabs selectedTabClassName="tabSelected" defaultIndex={2}>
				<TabList style={styles.tablist}>
					<div>
						<span style={styles.span}>DATA GATE</span>
					</div>
					<div style={styles.tabs}>
						<Tab className="tab">Review</Tab>
						<Tab className="tab">Request</Tab>
						<Tab className="tab">Manage</Tab>
					</div>
				</TabList>

				<TabPanel style={{ paddingLeft: '5vw' }}>
					<ComingSoon />
				</TabPanel>
				<TabPanel style={{ ...styles.tabPanel, paddingLeft: '10vw', paddingRight: '11vw' }}>
					<Requests />
				</TabPanel>

				<TabPanel style={{ ...styles.tabPanel, paddingLeft: '3vw' }}>
					<ManageData
						keySelect={keySelect}
						edit={edit}
						handleEdit={this.handleEdit}
						handleChange={this.handleChange}
						data={data[tag]}
					/>
				</TabPanel>
			</Tabs>
		);
	}
}

const styles = {
	tablist: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	tabPanel: {
		paddingRight: '3vw'
	},
	tabs: {
		display: 'flex',
		paddingRight: '8vw'
	},
	span: {
		display: 'inline-flex',
		alignItems: 'center',
		paddingLeft: '10px'
	},
	loader: {
		display: 'flex',
		width: '100vw',
		height: '100vh',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	}
};

export default App;
