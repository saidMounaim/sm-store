import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// create store
import { createStore } from 'redux';
//provider
import { Provider } from 'react-redux';
import { rootReducers } from './redux/rootReducres';

const store = createStore(rootReducers);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
