import React, { useState, useEffect } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

import { connect } from "react-redux";

import { updateContact } from "./../../actions/contactActions";

const EditContact = ({ updateContact, contact: { currentContact } }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	useEffect(() => {
		if (currentContact !== null) {
			setName(currentContact.name);
			setEmail(currentContact.email);
			setPhone(currentContact.phone);
		}
	}, [currentContact]);

	// para carregar os labels já com a classe ativa, se eu não fizer isso, o label ficará ocupando o mesmo espaço do texto carregado dinamicamente
	(() => {
		let elems = document.querySelectorAll(
			"#edit-contact-modal .input-field label"
		);
		elems.forEach(el => el.classList.add("active"));
	})();

	const onUpdate = ev => {
		ev.preventDefault();

		const el = document.querySelector("#edit-contact-modal");
		const instance = M.Modal.getInstance(el);

		if (!name || !email || !phone) {
			return M.toast({
				html: "Todos os campos precisam ser preenchidos",
				classes: "toast-error"
			});
		}

		const updatedContact = {
			_id: currentContact._id,
			name,
			email,
			phone
		};

		updateContact(updatedContact);

		M.toast({
			html: "Contato Atualizado",
			classes: "toast-success"
		});

		instance.close();
	};

	return (
		<form id="edit-contact-modal" className="modal" style={{ height: "80%" }}>
			<div className="modal-content">
				<h4>Editar Contato</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="name"
							id="edit-name"
							value={name}
							className="validate"
							onChange={ev => setName(ev.target.value)}
						/>
						<label htmlFor="edit-name" className="active">
							Nome do contato
						</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<input
							type="email"
							name="email"
							id="edit-email"
							value={email}
							onChange={ev => setEmail(ev.target.value)}
						/>
						<label htmlFor="edit-email" className="active">
							Email do Contato
						</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="phone"
							id="edit-phone"
							value={phone}
							className="validate"
							onChange={ev => setPhone(ev.target.value)}
						/>
						<label htmlFor="edit-phone" className="active">
							Número
						</label>
					</div>
				</div>
			</div>
			<button
				className="btn-large purple waves-effect waves-light"
				onClick={onUpdate}
			>
				Atualizar
			</button>
			<div className="modal-footer"></div>
		</form>
	);
};

const mapStateToProps = state => ({
	contact: state.contact
});

export default connect(mapStateToProps, { updateContact })(EditContact);