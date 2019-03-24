import React, { Component } from 'react';
import CategoryAdd from '../../components/categoryComponents/CategoryAdd';

export default class AddCategory extends Component {

	render() {
		return (
			<div>
				<h3>Add Category to List</h3>
				<CategoryAdd />
			</div>
		);
	}
}