import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Category from '../components/Category';
import Products from '../components/Products';

const HomePage = () => {
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
							{/* CATEGORY COMPONENT */}
							<Category />
						</div>
					</div>
					<div class="col">
						<div class="row">
							<Products />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default HomePage;
