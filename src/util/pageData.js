export const MANAGE_DATA = {
	user_id: {
		key: 'user_id',
		description: 'Contains a primary key used to identify a user of the system',
		typeDesc: 'Contains a primary key used to identify a user of the system',
		typeSelected: { label: '{integer}', value: '{integer}', description: 'ID key of user' },
		sensitivity: true,
		possibleValues: [
			{ label: 'null', value: 'null', description: 'Value when user is not found' },
			{ label: '{integer}', value: '{integer}', description: 'ID key of user' }
		]
	},
	item_id: {
		key: 'item_id',
		description: 'The ID of the item',
		typeDesc: 'The ID of the item',
		typeSelected: { label: '{string}', value: '{string}', description: 'ID key of item' },
		sensitivity: true,
		possibleValues: [
			{ label: 'null', value: 'null', description: 'Value when item is not found' },
			{ label: '{integer}', value: '{integer}', description: 'ID key of item' },
			{ label: '{string}', value: '{string}', description: 'ID key of item' }
		]
	},
	user_email: {
		key: 'user_email',
		description: 'The email of the user',
		typeDesc: 'The email of the user',
		typeSelected: { label: 'null', value: 'null', description: 'Value when email is not found' },
		sensitivity: true,
		possibleValues: [
			{ label: 'null', value: 'null', description: 'Value when email is not found' },
			{ label: '{string}', value: '{string}', description: 'User email' }
		]
	},
	item_views: {
		key: 'item_views',
		description: 'How many views the item has',
		typeDesc: 'How many views the item has',
		typeSelected: { label: '{integer}', value: '{integer}', description: 'Item views' },
		sensitivity: false,
		possibleValues: [
			{ label: 'null', value: 'null', description: 'Value when views are not found' },
			{ label: '{integer}', value: '{integer}', description: 'Item views' }
		]
	},
	item_favorites: {
		key: 'item_favorites',
		description: 'Favorite items',
		typeDesc: 'Favorite items',
		typeSelected: { label: '{string}', value: '{string}', description: 'Item favorites' },
		sensitivity: false,
		possibleValues: [
			{ label: 'null', value: 'null', description: 'Value when favorites are not found' },
			{ label: '{string}', value: '{string}', description: 'Item favorites' }
		]
	}
};

export const REQUEST_DATA = [
	{ date: '2017/09/21', reason: 'Data science algorithms', status: 'Pending' },
	{ date: '2017/08/13', reason: 'Stakeholder dashboards', status: 'Approved' },
	{ date: '2017/07/03', reason: 'Email blast', status: 'Denied' },
	{ date: '2017/02/09', reason: 'Investigation', status: 'Approved' },
	{ date: '2017/09/21', reason: 'Data science algorithms', status: 'Pending' },
	{ date: '2017/08/13', reason: 'Stakeholder dashboards', status: 'Approved' },
	{ date: '2017/07/03', reason: 'Email blast', status: 'Denied' },
	{ date: '2017/02/09', reason: 'Investigation', status: 'Approved' },
	{ date: '2017/09/21', reason: 'Data science algorithms', status: 'Pending' },
	{ date: '2017/08/13', reason: 'Stakeholder dashboards', status: 'Approved' },
	{ date: '2017/07/03', reason: 'Email blast', status: 'Denied' },
	{ date: '2017/02/09', reason: 'Investigation', status: 'Approved' }
];
