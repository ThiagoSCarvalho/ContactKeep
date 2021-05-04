import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import {
	setLoading,
	getTotalContacts,
	getPaginatedContacts
} from "./../../actions/contactActions";

const Pagination = ({
	setLoading,
	getTotalContacts,
	getPaginatedContacts,
	contact: { error, loading, totalContacts }
}) => {
	useEffect(() => {
		setLoading();
		getTotalContacts();
	}, []);

	const [page, setPage] = useState(1);
	const [perPage, setPerPage] = useState(6);
	let totalPages = Math.ceil(totalContacts / perPage);

	const changePage = toPage => {
		console.log(toPage);
		setPage(toPage);
		getPaginatedContacts(toPage, perPage);
	};

	return (
		<ul class="pagination">
			<li
				className={page === 1 ? "disabled" : "waves-effect"}
				onClick={() => changePage(1)}
			>
				<a href="#!">
					<i class="material-icons">chevron_left</i>
				</a>
			</li>
			{page > 1 && (
				<li class="" onClick={() => changePage(page - 1)}>
					<a href="#!"> {page - 1}</a>
				</li>
			)}
			<li class="active">
				<a href="#!"> {page}</a>
			</li>
			{page < totalPages && (
				<li class="waves-effect" onClick={() => changePage(page + 1)}>
					<a href="#!">{page + 1}</a>
				</li>
			)}

			{page + 1 < totalPages && (
				<li class="waves-effect" onClick={() => changePage(page + 2)}>
					<a href="#!">{page + 2}</a>
				</li>
			)}

			<li
				className={page === totalPages ? "disabled" : "waves-effect"}
				onClick={() => changePage(totalPages)}
			>
				<a href="#!">
					<i class="material-icons">chevron_right</i>
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
	getPaginatedContacts
})(Pagination);