import React, { useEffect } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

import ContactList from "./ContactList";
import Pagination from "./Pagination";

import SearchBar from "./SearchBar";

import { connect } from "react-redux";

import { setLoggedInUser, setLoading } from "./../../actions/authActions";

import AddContact from "./../modals/AddContact";
import EditContact from "./../modals/EditContact";

const Contacts = ({
	contact: { filteredContacts },
	setLoggedInUser,
	setLoading
}) => {
	useEffect(() => {
		setLoading();
		setLoggedInUser();

		var elems = document.querySelectorAll(".modal");
		M.Modal.init(elems);
	}, []);

	return (
		<div className="center container">
			<h2>Contatos</h2>

			<SearchBar />

			<AddContact />
			<EditContact />

			<ContactList />

			{filteredContacts !== null && filteredContacts.length > 0 ? (
				""
			) : (
				<Pagination />
			)}

			<div className="fixed-action-btn modal-trigger" href="#add-contact-modal">
				<a href="#!" className="btn-floating btn-large red">
					<i className="large material-icons white-text ">add</i>
				</a>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	contact: state.contact
});

export default connect(mapStateToProps, { setLoading, setLoggedInUser })(
	Contacts
);