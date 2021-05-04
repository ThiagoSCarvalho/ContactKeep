import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import Spinner from "./../Layout/Spinner";

import { connect } from "react-redux";

import {
	loginUser,
	clearErrors,
	setLoggedInUser,
	setLoading
} from "./../../actions/authActions";

const Login = ({
	loginUser,
	clearErrors,
	setLoggedInUser,
	setLoading,
	auth: { loading, error }
}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
		// eslint-disable-next-line
	}, [error]);

	const login = ev => {
		ev.preventDefault();

		if (!email || !password) {
			M.toast({
				html: "Digite o seu email e senha",
				classes: "toast-error"
			});
		} else {
			setLoading();

			const formData = { email, password };

			loginUser(formData).then(() => setLoggedInUser());
		}
	};

	return (
		<React.Fragment>
			<div className="flex-xy-center row custom-container">
				<form className="col s12">
					<h2 className="center">Login</h2>
					<div className="row">
						<div className="input-field col s12">
							<input
								id="email"
								type="email"
								className="validate"
								required
								value={email}
								onChange={ev => setEmail(ev.target.value)}
							/>
							<label htmlFor="email">Email</label>
						</div>

						<div className="input-field col s12">
							<input
								id="password"
								type="password"
								className="validate"
								required
								value={password}
								onChange={ev => setPassword(ev.target.value)}
							/>
							<label htmlFor="password">Password</label>
						</div>
					</div>
					<button
						className="btn-large purple waves-effect waves-light"
						onClick={login}
					>
						Login
					</button>
				</form>
			</div>
			{loading && <Spinner />}
		</React.Fragment>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, {
	loginUser,
	clearErrors,
	setLoggedInUser,
	setLoading
})(Login);