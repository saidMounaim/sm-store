import * as actions from './ProductActionsTypes';

const initialState = {
	products: [],
	details: null,
	cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
};

export const productReducers = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		case actions.ADD_TO_CART:
			localStorage.setItem('cart', JSON.stringify([...state.cart, action.payload]));
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		case actions.UPDATE_QUANTITY:
			localStorage.setItem('cart', JSON.stringify(action.payload));
			return {
				...state,
				cart: action.payload,
			};
		case actions.DELETE_FROM_CART:
			const originalCart = [...state.cart];
			const filtredCart = originalCart.filter((c) => c.id !== action.payload);
			localStorage.setItem('cart', JSON.stringify(filtredCart));
			return {
				...state,
				cart: filtredCart,
			};
		case actions.PRODUCT_DETAILS:
			return {
				...state,
				details: action.payload,
			};
		default:
			return state;
	}
};
