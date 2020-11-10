import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from './Search';

const Navbar = () => {
	const { cart } = useSelector((state) => state.products);

	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">
					SmStore
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarsExampleDefault"
					aria-controls="navbarsExampleDefault"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
					<ul className="navbar-nav m-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item active">
							<Link className="nav-link" to="/categories">
								Categories <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/products">
								Product
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/cart">
								Cart
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Contact
							</Link>
						</li>
					</ul>

					<Search />

					<Link className="btn btn-success btn-sm ml-3" to="/cart">
						<i className="fa fa-shopping-cart"></i> Cart
						<span className="badge badge-light"> {cart?.length}</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
