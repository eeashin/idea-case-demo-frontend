import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import { connect } from 'react-redux';

class CategoryRandomized extends Component {
	render() {
		let category = { id: -1, name: "N/A", budget: "-1" };
		const categoryList = this.props.categories.categoryList;

		if (categoryList && categoryList.length > 0) {
			let randomizedId = Math.floor(
				Math.random() * categoryList.length
			);
			category = categoryList[randomizedId];
		}

		return (
			<div className="container">
				<h4>Randomized category: </h4>
				<li className="list-group-item">
					<CategoryItem item={category} />
				</li>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	categories: state.categories,
});

export default connect(mapStateToProps, null)(CategoryRandomized);