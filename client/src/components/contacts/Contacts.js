import React from "react";

import ContactList from "./ContactList";
import Pagination from "./Pagination";

import AddContact from "./../modals/AddContact";
import EditContact from "./../modals/EditContact";

const Contacts = () => {
	return (
		<div className="center container">
			<h2>Contatos</h2>
			{/* refatorar para componente depois */}
			<div className="row">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s12">
							<i className="material-icons prefix">search</i>
							<input id="icon_prefix" type="text" className="validate" />
							<label htmlFor="icon_prefix">Filtre por nome ou telefone</label>
						</div>
					</div>
				</form>
			</div>
			{/* criar componente para cada contato depois */}

			<AddContact />
			<ContactList />
            <Pagination />

			<div className="fixed-action-btn modal-trigger" href="#add-contact-modal">
				<a href="#!" className="btn-floating btn-large red">
					<i className="large material-icons white-text ">add</i>
				</a>
			</div>
		</div>
	);
};

export default Contacts;