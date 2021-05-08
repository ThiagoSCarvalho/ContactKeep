import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeContent = () => {
	const [visibility, setVisibility] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setVisibility(true);
		}, 100);
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
					<h5 className="header col s12 grey-text text-darken-2">
						Salve seus contatos nesta aplicação simples e rápida
					</h5>
				</div>
				<div className="row center">
					<Link
						to="/register"
						className="btn-large purple waves-effect waves-light"
					>
						Cadastre-se
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HomeContent;