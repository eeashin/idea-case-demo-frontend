import ActionTypes from './ActionTypes';
//import { fetchTestCategories } from '../models/Test';
import axios from 'axios';
import API_ROOT from '../constants/AppConstants';

// ACTION CREATORS (Action object creator functions)
// ~ standard and only way to create each action object

//GET - '/category/all'
export const categoriesAll_REQ = () => ({
	type: ActionTypes.CATEGORIES_ALL_REQ,
});
export const categoriesAll_OK = (categoryList) => ({
	type: ActionTypes.CATEGORIES_ALL_OK,
	categoryList: categoryList
});
export const categoriesAll_X = () => ({
	type: ActionTypes.CATEGORIES_ALL_X,
});

// Helper function, real action function?
export function fetchAllCategories() {
	return async (dispatch, getState) => {
		dispatch(categoriesAll_REQ());
		//const categoryList = fetchTestCategories();  // from mock "Back-end"
		const ajaxRequest = {
			method: 'get',
			url: API_ROOT + '/category/all'
		};
		axios(ajaxRequest)
			.then((response) => {
				dispatch(categoriesAll_OK(response.data));
			})
			.catch((error) => {
				console.error("Error: " + error);
				dispatch(categoriesAll_X());
			})
			.then(() => {
				return { type: null };  // 'Empty' action object
			});

	}
};

// Same with other actions...
// Action object creator functions

//POST/ADD an item to '/category'
export const categoryAdd_REQ = () => ({
	type: ActionTypes.CATEGORY_ADD_REQ,
});
export const categoryAdd_OK = (category) => ({
	type: ActionTypes.CATEGORY_ADD_OK,
	category: category,
});
export const categoryAdd_X = () => ({
	type: ActionTypes.CATEGORY_ADD_X,
});

// Helper function, real action function?
export function addCategory(category) {
	return async (dispatch, getState) => {
		dispatch(categoryAdd_REQ());
		// Here would be some async AJAX call with await...
		// ... or some promises or so
		console.dir(category);
		const ajaxRequest = {
			method: 'post',
			url: API_ROOT + '/category',
			data: category,
		};
		axios(ajaxRequest)
			.then((response) => {
				dispatch(categoryAdd_OK());
				dispatch(fetchAllCategories());

			})
			.catch(() => {
				dispatch(categoryAdd_X());

			})
	}
}

// DELETE an item by Id
export const categoryDelete_REQ = () => ({
	type: ActionTypes.CATEGORY_DELETE_REQ,
});
export const categoryDelete_OK = (id) => ({
	type: ActionTypes.CATEGORY_DELETE_OK,
	id: id,
});
export const categoryDelete_X = () => ({
	type: ActionTypes.CATEGORY_DELETE_X,
});

export function deleteCategory(id) {
	return async (dispatch, getState) => {
		dispatch(categoryDelete_REQ());
		// Here would be some async AJAX call with await...
		// ... or some promises or so
		console.dir(id);

		if (id) {
			dispatch(categoryDelete_OK(id));
		} else {
			dispatch(categoryDelete_X());
		}
	}
};

//GET - EXpensive items by Id
export const categoriesExpensive_REQ = () => ({
	type: ActionTypes.CATEGORIES_EXPENSIVE_REQ,
});
export const categoriesExpensive_OK = (expensiveids) => ({
	type: ActionTypes.CATEGORIES_EXPENSIVE_OK,
	expensiveids: expensiveids
});
export const categoriesExpensive_X = () => ({
	type: ActionTypes.CATEGORIES_EXPENSIVE_X,
});

export function fetchExpensiveIds() {
	return async (dispatch, getState) => {
		dispatch(categoriesExpensive_REQ());
		const ajaxReq = {
			method: 'get',
			url: API_ROOT + '/category/idsByBudgetLimit/?limit=500&above=true'
		};
		axios(ajaxReq)
			.then((response) => {
				let expensiveids = response.data;
				dispatch(categoriesExpensive_OK(expensiveids));
			})
			.catch((error) => {
				console.log(error);
				dispatch(categoriesExpensive_X());
			})
			.then(() => {
				return { type: null };
			});
	}
};