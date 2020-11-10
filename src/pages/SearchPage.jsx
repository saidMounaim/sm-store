import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, Link } from 'react-router-dom';
import Category from '../components/Category';
import Jumbotron from '../components/Jumbotron';
import { fetchProductsAction, addToCartAction } from '../redux/product/ProductActions';
import ProductsApi from '../services/ProductsApi';

const SearchPage = () => {
	const { products, cart } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	let history = useHistory();
	const location = useLocation();
	const query = location.state;

	const fetchSearchResults = async () => {
		try {
			const data = await ProductsApi.searchProduct(query.detail);
			dispatch(fetchProductsAction(data));
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		if (query?.detail === '' || query?.detail == undefined) {
			history.push('/');
		}
		fetchSearchResults();
	}, [query]);


	return (
		<React.Fragment>
			<Jumbotron />
			<div class="container">
				<div class="row">
					<div class="col-12 col-sm-3">
						<div class="card bg-light mb-3">
							<div class="card-header bg-primary text-white text-uppercase">
								<i class="fa fa-list"></i> Categories
							</div>
							<Category />
						</div>
					</div>
					<div class="col">
						<div class="row">
							{(products?.length > 0 && (
								<>
									{products.map((product) => (
										<div className="col-12 col-md-6 col-lg-4" key={product.id}>
											<div className="card">
												<img
													className="card-img-top"
													src={product.image}
													alt="Card image cap"
												/>
												<div className="card-body">
													<h4 className="card-title">
														<Link to={`/product/${product.slug}`} title="View Product">
															{product.title}
														</Link>
													</h4>
													<div className="row">
														<div className="col">
															<p className="btn btn-danger btn-block">
																{product.price} $
															</p>
														</div>
														<div className="col">
															<button
																disabled={
																	cart.find((c) => c.id == product.id)
																		? `disabled`
																		: false
																}
																onClick={() =>
																	dispatch(
																		addToCartAction({ ...product, quantity: 1 })
																	)
																}
																className="btn btn-success btn-block"
															>
																Add to cart
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									))}
								</>
							)) || (
								<>
									<h2>No Results Found</h2>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SearchPage;
