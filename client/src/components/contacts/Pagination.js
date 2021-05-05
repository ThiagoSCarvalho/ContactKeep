import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import {
	setLoading,
	getTotalContacts,
	getPaginatedContacts,
	setPage
} from "./../../actions/contactActions";

const Pagination = ({
	setLoading,
	getTotalContacts,
	getPaginatedContacts,
	setPage,
	contact: { totalContacts, page }
}) => {
	useEffect(() => {
		setLoading();
		getTotalContacts();
	}, []);


	const [perPage, setPerPage] = useState(6);
	let totalPages = Math.ceil(totalContacts / perPage);

	const changePage = toPage => {
		console.log(toPage);
		setPage(toPage);
		getPaginatedContacts(toPage, perPage);
		getTotalContacts();
	};

	return (
		<ul className="pagination">
			<li
				classNameName={page === 1 ? "disabled" : "waves-effect"}
				onClick={() => changePage(1)}
			>
				<a href="#!">
					<i className="material-icons">chevron_left</i>
				</a>
			</li>
			{page > 1 && (
				<li className="" onClick={() => changePage(page - 1)}>
					<a href="#!"> {page - 1}</a>
				</li>
			)}
			<li className="active">
				<a href="#!"> {page}</a>
			</li>
			{page < totalPages && (
				<li className="waves-effect" onClick={() => changePage(page + 1)}>
					<a href="#!">{page + 1}</a>
				</li>
			)}

			{page + 1 < totalPages && (
				<li className="waves-effect" onClick={() => changePage(page + 2)}>
					<a href="#!">{page + 2}</a>
				</li>
			)}

			<li
				className={page === totalPages ? "disabled" : "waves-effect"}
				onClick={() => changePage(totalPages)}
			>
				<a href="#!">
					<i className="material-icons">chevron_right</i>
				</a>
			</li>
		</ul>
	);
};

const mapStateToProps = state => ({
	contact: state.contact
});

export default connect(mapStateToProps, {
	setLoading,
	getTotalContacts,
	getPaginatedContacts,
	setPage
})(Pagination);