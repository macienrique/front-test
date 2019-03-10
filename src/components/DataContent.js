import React from 'react';
import Select from 'react-select';
import PossibleValues from './PossibleValues';
import AddItem from './AddItem';
import TableHeader from './TableHeader';

import saveIcon from '../images/save.svg';
import editIcon from '../images/edit.svg';

import { BORDER_STYLE } from '../util/constants';

class DataContent extends React.Component {
	constructor(props) {
		super(props);
		const { data, edit } = this.props;
		this.state = {
			key: data.key,
			description: data.description,
			possibleValues: data.possibleValues,
			typeSelected: data.typeSelected,
			typeDesc: data.typeDesc,
			sensitivity: data.sensitivity,
			edit: edit
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleCheckbox = this.handleCheckbox.bind(this);
	}

	async handleChange(evt) {
		await this.setState({ [evt.target.name]: evt.target.value });
	}

	async handleCheckbox() {
		await this.setState({ sensitivity: !this.state.sensitivity });
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.data.key !== prevState.key || nextProps.edit !== prevState.edit) {
			return {
				key: nextProps.data.key,
				description: nextProps.data.description,
				possibleValues: nextProps.data.possibleValues,
				typeSelected: nextProps.data.typeSelected,
				typeDesc: nextProps.data.typeDesc,
				sensitivity: nextProps.data.sensitivity,
				edit: nextProps.edit
			};
		} else {
			return null;
		}
	}

	render() {
		const { key, description, typeSelected, typeDesc, possibleValues, sensitivity, edit } = this.state;

		return (
			<div style={style.content}>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					{edit ? (
						<div style={style.column}>
							<label>Key name</label>
							<input
								type="text"
								placeholder="Input key name"
								name="key"
								value={key}
								onChange={this.handleChange}
								style={{ paddingBottom: '1vh', paddingTop: '1vh' }}
							/>
						</div>
					) : (
						<h2>{key}</h2>
					)}

					<div id="saveTab" onClick={() => this.props.handleEdit(this.state)}>
						<img style={style.img} src={edit ? saveIcon : editIcon} alt="" />
						{edit ? 'Save' : 'Edit this'}
					</div>
				</div>
				<div style={style.column}>
					<label>Description</label>
					<input
						type="text"
						placeholder="Input description"
						name="description"
						onChange={this.handleChange}
						value={description}
						style={{ paddingBottom: '4vh', paddingTop: '1vh' }}
						disabled={!edit}
					/>
				</div>

				<div style={style.column}>
					<label>Type</label>
					{edit ? (
						<div style={{ width: '20vw' }}>
							<Select
								value={typeSelected}
								onChange={(typeSelected) => this.setState({ typeSelected })}
								options={possibleValues}
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
							style={{ paddingBottom: '4vh', paddingTop: '1vh' }}
							disabled={!edit}
						/>
					)}
				</div>
				<div>
					{edit ? (
						<div>
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
							<label>Sensitivity</label>
							<input
								type="text"
								placeholder="Sensitivity"
								name="sensitivity"
								value="This is personal data and cannot be distributed in raw form"
								style={{ paddingTop: '1vh' }}
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
					{edit && <AddItem name="Add possible value" width="15%" />}
				</div>
			</div>
		);
	}
}

const style = {
	content: {
		border: BORDER_STYLE,
		width: '70vw',
		minHeight: '480px',
		height: '60vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		fontSize: '12px',
		padding: '3vw'
	},
	selectCustom: {
		borderTop: 'none',
		width: '20vw',
		borderBottom: '2px solid #ddd'
	},
	possibleValue: {
		display: 'inline-flex',
		paddingLeft: '10px',
		alignItems: 'center'
	},
	column: {
		display: 'flex',
		flexDirection: 'column'
	},
	img: {
		width: '14px',
		height: '14px'
	}
};

export default DataContent;
