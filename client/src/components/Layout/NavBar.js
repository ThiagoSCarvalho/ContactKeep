import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { logout } from "./../../actions/authActions";

const NavBar = ({ logout, auth: { isAuthenticated } }) => {
	return (
		<div>
			<nav className="nav-extended deep-purple darken-2 ">
				<div className="nav-wrapper">
					<Link to="/" className="brand-logo">
						ContactKeeper
					</Link>
					<a href="#!" data-target="mobile-demo" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							{isAuthenticated ? (
								<Link to="/contacts">Contatos</Link>
							) : (
								<Link to="/register">Cadastrar</Link>
							)}
						</li>
						<li>
							{isAuthenticated ? (
								<Link to="/" onClick={logout}>
									Logout
								</Link>
							) : (
								<Link to="/login">Login</Link>
							)}
						</li>
					</ul>
				</div>
			</nav>

			<ul className="sidenav" id="mobile-demo">
				<li>
					<Link className="sidenav-close" to="/">Home</Link>
				</li>
				<li>
					{isAuthenticated ? (
						<Link className="sidenav-close" to="/contacts">
							Contatos
						</Link>
					) : (
						<Link className="sidenav-close" to="/register">
							Cadastrar
						</Link>
					)}
				</li>
				<li>
					{isAuthenticated ? (
						<Link className="sidenav-close" to="/" onClick={logout}>
							Logout
						</Link>
					) : (
						<Link className="sidenav-close" to="/login">
							Login
						</Link>
					)}
				</li>
			</ul>
		</div>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavBar);