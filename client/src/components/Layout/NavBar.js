import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
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
							<Link to="/register">Cadastrar</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
					</ul>
				</div>
			</nav>

			<ul className="sidenav" id="mobile-demo">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/register">Cadastrar</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;