import React from "react";

const Register = () => {
	return (
		<div className="flex-xy-center row custom-container">
			<form className="col s12">
				<h2 className="center">Cadastro</h2>
				<div className="row">
					<div className="input-field col s12">
						<input id="name" type="text" className="validate" />
						<label htmlFor="name">Nome</label>
					</div>

					<div className="input-field col s12">
						<input id="email" type="email" className="validate" />
						<label htmlFor="email">Email</label>
					</div>

					<div className="input-field col s12">
						<input id="password" type="password" className="validate" />
						<label htmlFor="password">Password</label>
					</div>
				</div>
				<button className="btn-large purple waves-effect waves-light">
					Cadastrar
				</button>
			</form>
		</div>
	);
};

export default Register;