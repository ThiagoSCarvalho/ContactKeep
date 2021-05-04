import React, { useState, useEffect } from "react";

import Spinner from "./../Layout/Spinner";

import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import {
	registerUser,
	setLoading,
	clearErrors,
	setLoggedInUser
} from "./../../actions/authActions";

const Register = ({
	registerUser,
	setLoading,
	clearErrors,
	setLoggedInUser,
	auth: { loading, error }
}) => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		if (error !== null) {
			// verifica se o valor de erro é um array ou não
			const verifyError = Array.isArray(error.errors);
			if (verifyError) {
				error.errors.map(err =>
					M.toast({ html: `${err.msg}`, classes: "toast-error" })
				);
				clearErrors();
			} else {
				M.toast({ html: `${error.msg}`, classes: "toast-error" });
				clearErrors();
			}
		}
	}, [error]);

	const onSubmit = ev => {
		ev.preventDefault();

		if (!name || !password || !confirmPassword || !email) {
			M.toast({
				html: "Todos os campos precisam ser preenchidos",
				classes: "toast-error"
			});
		} else if (password !== confirmPassword) {
			M.toast({
				html: "As senhas não estão iguais, por verifique",
				classes: "toast-error"
			});
		} else {
			setLoading();
			const formData = { name, password, email };
			// registerUser(formData);
			// setLoggedInUser();

			registerUser(formData).then(() => setLoggedInUser());
		}
	};

	const wait = () => new Promise(resolve => {});

	return (
		<React.Fragment>
			<div className="flex-xy-center row custom-container">
				<form className="col s12">
					<h2 className="center">Cadastro</h2>
					<div className="row">
						<div className="input-field col s12">
							<input
								id="name"
								type="text"
								className="validate"
								value={name}
								onChange={ev => setName(ev.target.value)}
								required
							/>
							<label htmlFor="name">Nome</label>
						</div>

						<div className="input-field col s12">
							<input
								id="email"
								type="email"
								className="validate"
								value={email}
								onChange={ev => setEmail(ev.target.value)}
								required
							/>
							<label htmlFor="email">Email</label>
						</div>

						<div className="input-field col s12">
							<input
								id="password"
								type="password"
								className="validate"
								value={password}
								onChange={ev => setPassword(ev.target.value)}
								required
								minLength="6"
							/>
							<label htmlFor="password">Senha</label>
						</div>

						<div className="input-field col s12">
							<input
								id="repeat-password"
								type="password"
								className="validate"
								value={confirmPassword}
								onChange={ev => setConfirmPassword(ev.target.value)}
								required
								minLength="6"
							/>
							<label htmlFor="repeat-password">Repita a senha</label>
						</div>
					</div>
					<button
						className="btn-large purple waves-effect waves-light"
						onClick={ev => onSubmit(ev)}
					>
						Cadastrar
					</button>
				</form>
			</div>
			{loading && <Spinner />}
		</React.Fragment>
	);
};


Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	setLoading: PropTypes.func.isRequired,
	clearErrors: PropTypes.func.isRequired,
	setLoggedInUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, {
	registerUser,
	setLoading,
	clearErrors,
	setLoggedInUser
	
})(Register);