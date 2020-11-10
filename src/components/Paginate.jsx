import React from 'react';

const Paginate = ({ postPerPage, products, onChangePage, currentPage }) => {
	const productsLenght = products?.length;

	const pagesTotal = Math.ceil(productsLenght / postPerPage);

	const pages = [];

	for (let i = 1; i <= pagesTotal; i++) {
		pages.push(i);
	}
	return (
		<React.Fragment>
			{productsLenght > postPerPage && (
				<div className="col-12">
					<nav aria-label="...">
						<ul className="pagination">
							<li className={'page-item'}>
								<button
									disabled={currentPage == 1 && `disabled`}
									className="page-link"
									tabindex="-1"
									onClick={() => onChangePage(currentPage - 1)}
								>
									Previous
								</button>
							</li>
							{pages.map((page) => (
								<li className={'page-item ' + (currentPage == page ? `active` : false)} key={page}>
									<button onClick={() => onChangePage(page)} className="page-link">
										{page}
									</button>
								</li>
							))}
							<li className={'page-item ' + currentPage == 1 ? `disabled` : false}>
								<button
									disabled={currentPage == pagesTotal && `disabled`}
									className="page-link"
									onClick={() => onChangePage(currentPage + 1)}
								>
									Next
								</button>
							</li>
						</ul>
					</nav>
				</div>
			)}
		</React.Fragment>
	);
};

export default Paginate;
