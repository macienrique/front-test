import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Manage from './Manage';

import 'react-tabs/style/react-tabs.css';

const Header = () => {
	return (
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
				<h2>Any content 1</h2>
			</TabPanel>
			<TabPanel>
				<h2>Any content 2</h2>
			</TabPanel>

			<TabPanel style={{ paddingRight: '3vw', paddingLeft: '3vw' }}>
				<Manage />
			</TabPanel>
		</Tabs>
	);
};

const styles = {
	tablist: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
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

export default Header;
