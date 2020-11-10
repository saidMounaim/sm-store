import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoryApi from '../services/CategoryApi';
import { fetchCategoriesAction } from '../redux/category/CategoryActions';
import { Link } from 'react-router-dom';

const Category = () => {
	const { categories } = useSelector((state) => state.categories);
	const dispatch = useDispatch();

	const fetchCategories = async () => {
		try {
			const data = await CategoryApi.getCategories();
			dispatch(fetchCategoriesAction(data));
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	return (
		<ul className="list-group category_block">
			{categories.map((category) => (
				<li className="list-group-item">
					<Link to={`/category/${category.name}`}>{category.name}</Link>
				</li>
			))}
		</ul>
	);
};

export default Category;
