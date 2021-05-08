import React from "react";

import M from "materialize-css/dist/js/materialize.min.js";

import { connect } from "react-redux";

import {
	deleteContact,
	getTotalContacts,
	getPaginatedContacts,
	setCurrentContact
} from "./../../actions/contactActions";

const ContactItem = ({
	cont,
	deleteContact,
	getTotalContacts,
	getPaginatedContacts,
	setCurrentContact,
	contact: { page }
}) => {
	const onDelete = () => {
		console.log(cont._id);
		if (window.confirm("Tem certeza que deseja excluir este contato?")) {
			deleteContact(cont._id);
			getTotalContacts();
			getPaginatedContacts(page);
			M.toast({ html: "Contato excluído", classes: "toast-success" });
		}
	};

	return (
		<div className="col s12  l4 ">
			<div className="card-panel white">
				<span className="grey-text text-darken-2">
					<div className="row">
						<div className="col s12 right-align">
							<i
								className="material-icons icon-bigger indigo-text darken-4 btn-edit modal-trigger"
								href="#edit-contact-modal"
								onClick={() => setCurrentContact(cont)}
							>
								edit
							</i>
							<i
								className="material-icons icon-bigger red-text darken-2 btn-delete"
								onClick={onDelete}
							>
								delete
							</i>
						</div>
						<div className="col s4 left-align"></div>

						<div className="col s12 left-align">{cont.name}</div>
						<div className="col s12 left-align">{cont.phone}</div>
						<div className="col s12 left-align">{cont.email}</div>
					</div>
				</span>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	contact: state.contact
});

export default connect(mapStateToProps, {
	deleteContact,
	getTotalContacts,
	getPaginatedContacts,
	setCurrentContact
})(ContactItem);