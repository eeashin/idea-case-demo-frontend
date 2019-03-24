import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

export default class CategoryListItem extends Component {

  render() {
    return (
			<div className="list-group list-group-flush">
      <li className="list-group-item">
        <CategoryItem item={this.props.item} />
        <button
				type="button"
				className="btn btn-sm btn-outline-primary"
				onClick= {() => this.props.deleteCategory(this.props.item.id)} 
				>
				Delete
				</button>
      </li>
			</div>
    );
  }
}
