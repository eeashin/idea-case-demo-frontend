import ActionTypes from '../actions/ActionTypes';

//Define initial states of reducer
export const initialState = {
	isLoading: false,
	categoryList: [],
	categoryIdsFound: null,
	categoryCurrent: null,
};

export default function categories(state = initialState, action) {
	switch (action.type) {
		//GET all categories
		case ActionTypes.CATEGORIES_ALL_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.CATEGORIES_ALL_OK:
			return {
				...state,
				categoryList: action.categoryList,
				isLoading: false,
			};
		case ActionTypes.CATEGORIES_ALL_X:
			return {
				...state,
				isLoading: false,
			};

		//ADD Category 
		case ActionTypes.CATEGORY_ADD_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.CATEGORY_ADD_OK:
			return {
				...state,
				isLoading: false,
			};
		case ActionTypes.CATEGORY_ADD_X:
			return {
				...state,
				isLoading: false,
			};

		//DELETE category by Id
		case ActionTypes.CATEGORY_DELETE_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.CATEGORY_DELETE_OK:
			return {
				...state,
				categoryList: state.categoryList.filter(
					(item) => item.id !== action.id
				),
				isLoading: false,
			};
		case ActionTypes.CATEGORY_DELETE_X:
			return {
				...state,
				isLoading: false,
			};
		//GET expensive categories
		case ActionTypes.CATEGORIES_EXPENSIVE_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.CATEGORIES_EXPENSIVE_OK:
			return {
				...state,
				expensiveids: action.expensiveids,
				isLoading: false,
			};
		case ActionTypes.CATEGORIES_EXPENSIVE_X:
			return {
				...state,
				isLoading: false,
			};

		// case ActionTypes.CATEGORY_RANDOMIZED_REQ:
		// 		return {
		// 				...state,
		// 				isLoading: true,
		// 		};
		// case ActionTypes.CATEGORY_RANDOMIZED_OK:
		// 		return {
		// 				...state,
		// 				categoryCurrent: state.categoryList[action.id],
		// 				isLoading: false,
		// 		};
		// case ActionTypes.CATEGORY_RANDOMIZED_X:
		// 		return {
		// 				...state,
		// 				isLoading: false,
		// 		};

		default:
			return state;
	}
}