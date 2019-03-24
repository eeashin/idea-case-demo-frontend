import React, { Component } from "react";
import CategoryList from "../../components/categoryComponents/CategoryList";
import CategoryRandomized from "../../components/categoryComponents/CategoryRandomized";

export default class Categories extends Component {
	render() {
		return (
			<div className="container" style={{ marginTop: 25, marginBottom: 50 }}>
				<h2>My Categories</h2>
				<CategoryList />
				<CategoryRandomized />
			</div>
		);
	}
}
