import axios from 'axios';

function getCategories() {
	return axios.get(`http://localhost:8000/api/categories`).then((response) => response.data['hydra:member']);
}

export default {
	getCategories,
};
