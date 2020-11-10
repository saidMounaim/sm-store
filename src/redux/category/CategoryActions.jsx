import * as actions from './CategoryActionsTypes';

export const fetchCategoriesAction = (categories) => {
	return {
		type: actions.FETCH_CATEGORIES,
		payload: categories,
	};
};
