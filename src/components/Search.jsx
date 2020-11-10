import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
	const [query, setQuery] = useState('');
	let history = useHistory();

	const onChangeQuery = (e) => {
		setQuery(e.target.value);
	};

	const onSubmitSearch = (e) => {
		e.preventDefault();
		if (query == '') {
			return;
		}
		history.push({
			pathname: '/search',
			state: { detail: query },
		});
		setQuery('');
	};

	return (
		<form className="form-inline my-2 my-lg-0">
			<div className="input-group input-group-sm">
				<input
					value={query}
					onChange={onChangeQuery}
					type="text"
					className="form-control"
					placeholder="Search..."
				/>
				<div className="input-group-append">
					<button onClick={onSubmitSearch} type="button" className="btn btn-secondary btn-number">
						<i className="fa fa-search"></i>
					</button>
				</div>
			</div>
		</form>
	);
};

export default Search;
