import * as actions from './ProductActionsTypes';

export const fetchProductsAction = (products) => {
	return {
		type: actions.FETCH_PRODUCTS,
		payload: products,
	};
};

export const addToCartAction = (product) => {
	return {
		type: actions.ADD_TO_CART,
		payload: product,
	};
};

export const updateQuantityAction = (cart) => {
	return {
		type: actions.UPDATE_QUANTITY,
		payload: cart,
	};
};

export const deleteFromCartAction = (id) => {
	return {
		type: actions.DELETE_FROM_CART,
		payload: id,
	};
};

export const productDetailsAction = (slug) => {
	return {
		type: actions.PRODUCT_DETAILS,
		payload: slug,
	};
};
