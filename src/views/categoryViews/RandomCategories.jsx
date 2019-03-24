import React, { Component } from 'react';
import CategoryRandomized from '../../components/categoryComponents/CategoryRandomized';

export default class RandomCategories extends Component {

	render() {
		return (
			<div className="container" style={{ marginTop: 35, marginBottom: 50 }}>
				<h3>Random Category Here</h3>
				<CategoryRandomized />
			</div>
		);
	}
}