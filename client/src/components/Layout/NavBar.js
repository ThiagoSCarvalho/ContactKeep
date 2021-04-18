import React from "react";

const NavBar = () => {
	return (
		<div>
			<nav className="nav-extended deep-purple darken-2 ">
				<div className="nav-wrapper">
					<a href="#!" className="brand-logo">
						ContactKeeper
					</a>
					<a href="#!" data-target="mobile-demo" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<a href="#!">Home</a>
						</li>
						<li>
							<a href="#!">Cadastrar</a>
						</li>
						<li>
							<a href="#!">Logar</a>
						</li>
					</ul>
				</div>
			</nav>

			<ul className="sidenav" id="mobile-demo">
				<li>
					<a href="#!">Home</a>
				</li>
				<li>
					<a href="#!">Cadastrar</a>
				</li>
				<li>
					<a href="#!">Logar</a>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;