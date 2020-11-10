import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCartAction, updateQuantityAction } from '../redux/product/ProductActions';

const CartPage = () => {
	const { cart } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	const onChageQuantity = (e) => {
		const { id, value } = e.target;
		const targetIndex = cart.findIndex((c) => c.id == id);
		if (targetIndex != -1) {
			cart[targetIndex].quantity = value;
			dispatch(updateQuantityAction(cart));
		}
	};

	const totalPriceQuantity = (price, quantity) => {
		const total = price * quantity;
		return total.toFixed(2);
	};

	const subTotalPriceCart = (cart) => {
		return cart?.reduce((amount, item) => item.price * item.quantity + amount, 0).toFixed(2);
	};

	return (
		<React.Fragment>
			<section className="jumbotron text-center">
				<div className="container">
					<h1 className="jumbotron-heading">E-COMMERCE CART</h1>
				</div>
			</section>

			<div className="container mb-4">
				<div className="row">
					{(cart?.length > 0 && (
						<>
							<div className="col-12">
								<div className="table-responsive">
									<table className="table table-striped">
										<thead>
											<tr>
												<th scope="col"> </th>
												<th scope="col">Product</th>
												<th scope="col" className="text-center">
													Quantity
												</th>
												<th scope="col" className="text-right">
													Price
												</th>
												<th scope="col" className="text-right">
													Total
												</th>
												<th> </th>
											</tr>
										</thead>
										<tbody>
											{cart &&
												cart.map((c) => (
													<tr>
														<td>
															<img src={c.image} style={{ width: `100px` }} />
														</td>
														<td>{c.title}</td>
														<td>
															<input
																onChange={onChageQuantity}
																className="form-control"
																type="number"
																min="1"
																max="10"
																id={c.id}
																value={c.quantity}
															/>
														</td>
														<td className="text-right">{c.price.toFixed(2)} $</td>
														<td className="text-right">
															{totalPriceQuantity(c.price, c.quantity)} $
														</td>
														<td className="text-right">
															<button
																className="btn btn-sm btn-danger"
																onClick={() => dispatch(deleteFromCartAction(c.id))}
															>
																<i className="fa fa-trash"></i>{' '}
															</button>{' '}
														</td>
													</tr>
												))}
											<tr>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td>Sub-Total (items {cart?.length})</td>
												<td className="text-right">{subTotalPriceCart(cart)} $</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div className="col mb-2">
								<div className="row">
									<div className="col-sm-12  col-md-6">
										<button className="btn btn-block btn-light">Continue Shopping</button>
									</div>
									<div className="col-sm-12 col-md-6 text-right">
										<button className="btn btn-lg btn-block btn-success text-uppercase">
											Checkout
										</button>
									</div>
								</div>
							</div>
						</>
					)) || (
						<>
							<div className="col-md-12">
								<h2 className="text-center">No cart found</h2>
							</div>
						</>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default CartPage;
