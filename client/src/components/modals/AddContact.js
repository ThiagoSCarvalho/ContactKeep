import React, { useState } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

import { connect } from "react-redux";

import {
	addContact,
	getPaginatedContacts,
	getTotalContacts
} from "./../../actions/contactActions";

const AddContact = ({
	addContact,
	getPaginatedContacts,
	getTotalContacts,
	contact: { page }
}) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const onSubmit = async ev => {
		ev.preventDefault();
		const el = document.querySelector(".modal");
		const instance = M.Modal.getInstance(el);

		if (!name || !email || !phone) {
			return M.toast({
				html: "Todos os campos precisam ser preenchidos",
				classes: "toast-error"
			});
		}

		const formData = { name, email, phone };

		await addContact(formData);
		getPaginatedContacts(page);
		getTotalContacts();

		M.toast({
			html: "Contato adicionado com sucesso !",
			classes: "toast-success"
		});

		instance.close();
	};

	return (
		<form id="add-contact-modal" className="modal" style={{ height: "80%" }}>
			<div className="modal-content">
				<h4>Novo Contato</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="name"
							id="name"
							value={name}
							className="validate"
							onChange={ev => setName(ev.target.value)}
						/>
						<label htmlFor="name" className="active">
							Nome do contato
						</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							onChange={ev => setEmail(ev.target.value)}
						/>
						<label htmlFor="email" className="active">
							Email do Contato
						</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="phone"
							id="phone"
							value={phone}
							className="validate"
							onChange={ev => setPhone(ev.target.value)}
						/>
						<label htmlFor="phone" className="active">
							Número
						</label>
					</div>
				</div>
			</div>
			<button
				className="btn-large purple waves-effect waves-light"
				onClick={onSubmit}
			>
				ADICIONAR
			</button>
			<div className="modal-footer"></div>
		</form>
	);
};

const mapStateToProps = state => ({
	contact: state.contact
});

export default connect(mapStateToProps, {
	getPaginatedContacts,
	addContact,
	getTotalContacts
})(AddContact);