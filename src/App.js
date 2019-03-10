import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Manage from './components/Manage';
import Requests from './components/Requests';
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
			loading: true, // ver loading
			edit: false
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
		await this.setState({ data: MANAGE_DATA });
	}

	render() {
		const { keySelect, data, tag, edit } = this.state;
		return (
			<Tabs selectedTabClassName="tabSelected" defaultIndex={1}>
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
					<h2>Any content 1</h2>
				</TabPanel>
				<TabPanel style={{ ...styles.tabPanel, paddingLeft: '10vw', paddingRight: '11vw' }}>
					<Requests />
				</TabPanel>

				<TabPanel style={{ ...styles.tabPanel, paddingLeft: '3vw' }}>
					<Manage
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
	}
};

export default App;
