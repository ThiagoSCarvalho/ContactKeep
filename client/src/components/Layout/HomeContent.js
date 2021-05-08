import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { setLoggedInUser } from "./../../actions/authActions";

const HomeContent = ({ setLoggedInUser, auth: { isAuthenticated, user } }) => {
	const [visibility, setVisibility] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setVisibility(true);
		}, 100);

		setLoggedInUser();
	}, []);

	return (
		<section
			className={`flex-xy-center ${
				visibility ? "fade-enter-active" : "fade-enter"
			}`}
		>
			<div>
				<h1 className="header center grey-text text-darken-4">
					Contact Keeper
				</h1>
				<div className="row center">
					{isAuthenticated ? (
						<h5 className="header col s12 grey-text text-darken-2">
							Seja bem vindo {user.name}
						</h5>
					) : (
						<h5 className="header col s12 grey-text text-darken-2">
							Salve seus contatos nesta aplicação simples e rápida
						</h5>
					)}
				</div>
				<div className="row center">
					{isAuthenticated ? (
						<Link
							to="/contacts"
							className="btn-large purple waves-effect waves-light"
						>
							Contatos
						</Link>
					) : (
						<Link
							to="/register"
							className="btn-large purple waves-effect waves-light"
						>
							Cadastre-se
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { setLoggedInUser })(HomeContent);