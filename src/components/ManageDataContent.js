import React from 'react';
import Select from 'react-select';
import PossibleValues from './PossibleValues';
import AddItem from './AddItem';
import TableHeader from './TableHeader';

import saveIcon from '../images/save.svg';
import editIcon from '../images/edit.svg';

import { BORDER_STYLE } from '../util/constants';

class ManageDataContent extends React.Component {
	constructor(props) {
		super(props);
		const { data, edit } = this.props;
		this.state = {
			key: data.key,
			name: data.name,
			description: data.description,
			possibleValues: data.possibleValues,
			typeSelected: data.typeSelected,
			typeDesc: data.typeDesc,
			sensitivity: data.sensitivity,
			edit: edit,
			newPossibleValue: false,
			newValue: '',
			newDescription: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleCheckbox = this.handleCheckbox.bind(this);
		this.handleNewPossibleValue = this.handleNewPossibleValue.bind(this);
	}

	async handleChange(evt) {
		await this.setState({ [evt.target.name]: evt.target.value });
	}

	async handleCheckbox() {
		await this.setState({ sensitivity: !this.state.sensitivity });
	}

	async handleNewPossibleValue() {
		const { newPossibleValue, newValue, newDescription } = this.state;
		if (newPossibleValue && newValue && newDescription) {
			let newObj = { label: newValue, value: newValue, description: newDescription };
			let newPosValues = [ ...this.state.possibleValues, newObj ];
			await this.setState({ possibleValues: newPosValues, newValue: '', newDescription: '' });
		}
		await this.setState({ newPossibleValue: !this.state.newPossibleValue });
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.data.key !== prevState.key || nextProps.edit !== prevState.edit) {
			return {
				key: nextProps.data.key,
				name: nextProps.data.name,
				description: nextProps.data.description,
				possibleValues: nextProps.data.possibleValues,
				typeSelected: nextProps.data.typeSelected,
				typeDesc: nextProps.data.typeDesc,
				sensitivity: nextProps.data.sensitivity,
				edit: nextProps.edit,
				newPossibleValue: false,
				newValue: '',
				newDescription: ''
			};
		}
		return null;
	}

	render() {
		const {
			name,
			description,
			typeSelected,
			typeDesc,
			possibleValues,
			sensitivity,
			edit,
			newPossibleValue,
			newValue,
			newDescription
		} = this.state;

		return (
			<div style={style.content}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: edit ? 'flex-start' : 'center',
						marginBottom: edit ? '10px' : '20px'
					}}
				>
					{edit ? (
						<div style={style.column}>
							<label>Key name</label>
							<input
								type="text"
								placeholder="Input key name"
								name="name"
								value={name}
								onChange={this.handleChange}
								style={{ paddingBottom: '10px', paddingTop: '5px' }}
							/>
						</div>
					) : (
						<h2>{name}</h2>
					)}

					<div id="saveTab" onClick={() => this.props.handleEdit(this.state)}>
						<img style={style.img} src={edit ? saveIcon : editIcon} alt="" />
						{edit ? 'Save' : 'Edit this'}
					</div>
				</div>
				<div style={style.column}>
					<label style={{ fontSize: edit ? '12px' : '16px' }}>Description</label>
					<input
						type="text"
						placeholder="Input description"
						name="description"
						onChange={this.handleChange}
						value={description}
						style={{ ...style.input, paddingBottom: edit && '30px' }}
						disabled={!edit}
					/>
				</div>

				<div style={style.column}>
					<label style={{ fontSize: edit ? '12px' : '16px' }}>Type</label>
					{edit ? (
						<div style={{ width: '20vw' }}>
							<Select
								value={typeSelected}
								onChange={(typeSelected) => this.setState({ typeSelected })}
								options={possibleValues.map((val) => {
									val.label = val.label.replace(/[{}]/g, '');
									return val;
								})}
								disabled={!edit}
							/>
						</div>
					) : (
						<input
							type="text"
							placeholder="Input type description"
							name="typeDesc"
							onChange={this.handleChange}
							value={typeDesc}
							style={style.input}
							disabled={!edit}
						/>
					)}
				</div>
				<div>
					{edit ? (
						<div style={{ paddingBottom: '20px' }}>
							<label className="container">
								<input
									type="checkbox"
									name="sensitivity"
									checked={sensitivity}
									onChange={this.handleCheckbox}
								/>
								<span className="checkmark" />
							</label>
							<span style={{ paddingLeft: '30px' }}>Is this personal data?</span>
						</div>
					) : (
						<div style={style.column}>
							<label style={{ fontSize: '16px' }}>Sensitivity</label>
							<input
								type="text"
								placeholder="Sensitivity"
								name="sensitivity"
								value="This is personal data and cannot be distributed in raw form"
								style={style.input}
								disabled={!edit}
							/>
						</div>
					)}
				</div>
				<div style={{ ...style.column, paddingBottom: '25px' }}>
					<TableHeader name="POSSIBLE VALUES" />
					<div style={style.possibleValue}>
						<h4 style={{ width: '30%' }}>VALUE</h4>
						<h4 style={{ width: '70%' }}>DESCRIPTION</h4>
					</div>
					{possibleValues.map((val, index) => (
						<PossibleValues key={index} value={val.value} description={val.description} />
					))}
					{newPossibleValue && (
						<div style={{ display: 'inline-flex' }}>
							<input
								type="text"
								placeholder="New value"
								name="newValue"
								value={newValue}
								onChange={this.handleChange}
								style={{ paddingTop: '1vh', marginRight: '7vw', width: '20%' }}
							/>
							<input
								type="text"
								placeholder="New description"
								name="newDescription"
								value={newDescription}
								onChange={this.handleChange}
								style={{ paddingTop: '1vh', width: '60%' }}
							/>
						</div>
					)}
					{edit && (
						<AddItem
							name={!newPossibleValue ? 'Add possible value' : 'Add'}
							handleNewPossibleValue={this.handleNewPossibleValue}
							width={!newPossibleValue ? '15%' : '5%'}
						/>
					)}
				</div>
			</div>
		);
	}
}

const style = {
	content: {
		border: BORDER_STYLE,
		width: '70vw',
		display: 'flex',
		flexDirection: 'column',
		fontSize: '12px',
		padding: '3vw',
		marginBottom: '40px'
	},
	possibleValue: {
		display: 'inline-flex',
		paddingLeft: '10px',
		alignItems: 'center'
	},
	column: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '20px'
	},
	img: {
		width: '14px',
		height: '14px'
	},
	input: {
		fontSize: '12px',
		paddingTop: '10px'
	}
};

export default ManageDataContent;
