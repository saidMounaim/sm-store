import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAction, addToCartAction } from '../redux/product/ProductActions';
import ProductsApi from '../services/ProductsApi';
import { Link } from 'react-router-dom';
import Paginate from './Paginate';

const Products = () => {
	const { products, cart } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	const [currentPage, setCurrentPage] = useState(1);
	const postPerPage = 3;

	const onChangePage = (page) => {
		setCurrentPage(page);
	};

	const indexOfLastProducts = currentPage * postPerPage;
	const indexOfFirstProducts = indexOfLastProducts - postPerPage;
	const productsFiltred = products.slice(indexOfFirstProducts, indexOfLastProducts);

	const fetchProducts = async () => {
		try {
			const data = await ProductsApi.getProducts();
			dispatch(fetchProductsAction(data));
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<React.Fragment>
			{productsFiltred.map((product) => (
				<div className="col-12 col-md-6 col-lg-4" key={product.id}>
					<div className="card">
						<img className="card-img-top" src={product.image} alt="Card image cap" />
						<div className="card-body">
							<h4 className="card-title">
								<Link to={`/product/${product.slug}`} title="View Product">
									{product.title}
								</Link>
							</h4>
							<div className="row">
								<div className="col">
									<p className="btn btn-danger btn-block">{product.price.toFixed(2)} $</p>
								</div>
								<div className="col">
									<button
										disabled={cart.find((c) => c.id == product.id) ? `disabled` : false}
										onClick={() => dispatch(addToCartAction({ ...product, quantity: 1 }))}
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
			<Paginate
				postPerPage={postPerPage}
				onChangePage={onChangePage}
				products={products}
				currentPage={currentPage}
			/>
		</React.Fragment>
	);
};

export default Products;
