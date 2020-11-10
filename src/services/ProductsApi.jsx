import axios from 'axios';

function getProducts() {
	return axios
		.get(`http://localhost:8000/api/products?order[id]=desc`)
		.then((response) => response.data['hydra:member']);
}

function searchProduct(query) {
	return axios
		.get(`http://localhost:8000/api/products?title=${query}`)
		.then((response) => response.data['hydra:member']);
}

function productDetails(slug) {
	return axios.get(`http://localhost:8000/api/product/${slug}`).then((response) => response.data);
}

export default {
	getProducts,
	searchProduct,
	productDetails,
};
