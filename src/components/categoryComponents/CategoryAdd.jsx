import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../../actions/category';

class CategoryAdd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newCategoryObject: { id: null, name: null, budget: null },
		};
	}

	inputFieldValueChanged = (event) => {
		this.setState({
				newCategoryObject:
					{ ...this.state.newCategoryObject, [event.target.id]: event.target.value }
			});
	};

	addCategoryButtonClicked = () => {
		const category = this.state.newCategoryObject;
		this.props.addCategoryLocal(category);
		this.setState({
			newCategoryObject: { id: null, name: null, budget: null },
		});

		// this.props.addCategoryLocal(this.state.newCategoryObject);   // Other way
	};
	
	render = () => {
		return (
			<div className="container">
				<h4>New Category</h4>
				<div className="input-group mb-3">
				<div className="col">
					<input id="id" type="text" placeholder="Enter Id" onChange={this.inputFieldValueChanged} /><br />
					<input id="name" type="text" placeholder="Enter Name" onChange={this.inputFieldValueChanged} /><br />
					<input id="budget" type="text" placeholder="Enter Budget" onChange={this.inputFieldValueChanged} /><br />
				</div>
				</div>

				<button
					type="button"
					className="btn btn-sm btn-outline-success"
					onClick={this.addCategoryButtonClicked}>
					Add New category
				</button>
			</div>
		);
	};
}

const mapDispatchToProps = dispatch => ({
	addCategoryLocal: (category) => {
		dispatch(addCategory(category));
	},
});

export default connect(null, mapDispatchToProps)(CategoryAdd);