import React, { Component } from 'react';
import CategoriesExpensive from '../../components/categoryComponents/CategoriesExpensive';

export default class ExpensiveCategories extends Component {

	render() {
		return (
			<div className="container" style={{ marginTop: 35, marginBottom: 50 }}>
				<h3>Expensive Categories Here</h3>
				<CategoriesExpensive />
			</div>
		);
	}
}