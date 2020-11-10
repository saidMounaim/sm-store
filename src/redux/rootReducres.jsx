import { combineReducers } from 'redux';
import { categoryReducers } from './category/CategoryReducers';
import { productReducers } from './product/ProductReducers';

export const rootReducers = combineReducers({
	products: productReducers,
	categories: categoryReducers,
});
