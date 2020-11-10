import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import SearchPage from './pages/SearchPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/product/:slug" component={ProductDetailsPage} />
					<Route path="/search" component={SearchPage} />
					<Route path="/cart" component={CartPage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
