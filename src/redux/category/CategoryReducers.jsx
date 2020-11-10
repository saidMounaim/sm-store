import * as actions from './CategoryActionsTypes';

const initialState = {
	categories: [],
};

export const categoryReducers = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};
		default:
			return state;
	}
};
