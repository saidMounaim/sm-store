import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { productDetailsAction } from '../redux/product/ProductActions';
import ProductsApi from '../services/ProductsApi';

const ProductDetailsPage = (props) => {
	const { details } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const params = useParams();
	let history = useHistory();

	const fetchProductDetails = async () => {
		try {
			const details = await ProductsApi.productDetails(params.slug);
			dispatch(productDetailsAction(details));
		} catch (error) {
			console.log(error.response);
			history.push('/');
		}
	};

	console.log(details);

	useEffect(() => {
		if (params.slug == '' || params.slug == undefined) {
			history.push('/');
		}
		fetchProductDetails();
	}, [params.slug]);

	return (
		<div>
			<h1>{details?.title}</h1>
		</div>
	);
};

export default ProductDetailsPage;
