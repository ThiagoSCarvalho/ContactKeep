import React from "react";

const Contacts = () => {
	return (
		<div className="center container">
			<h2>Contatos</h2>
			{/* refatorar para componente depois */}
			<div className="row">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s12">
							<i className="material-icons prefix">search</i>
							<input id="icon_prefix" type="text" className="validate" />
							<label htmlFor="icon_prefix">Filtre por nome ou telefone</label>
						</div>
					</div>
				</form>
			</div>
			{/* criar componente para cada contato depois */}
			<div className="row">
				<div className="col s12  l4 ">
					<div className="card-panel white">
						<span className="grey-text text-darken-2">
							<div className="row">
								<div className="col s12 left-align">
									<i className="material-icons icon-bigger">person_outline</i>
								</div>
								<div className="col s12 right-align">Nome</div>
								<div className="col s12 right-align">Telefone</div>
								<div className="col s12 right-align">Email</div>
							</div>
						</span>
					</div>
				</div>
				<div className="col s12  l4 ">
					<div className="card-panel white">
						<span className="grey-text text-darken-2">
							<div className="row">
								<div className="col s12 left-align">
									<i className="material-icons icon-bigger">person_outline</i>
								</div>
								<div className="col s12 right-align">Nome</div>
								<div className="col s12 right-align">Telefone</div>
								<div className="col s12 right-align">Email</div>
							</div>
						</span>
					</div>
				</div>
				<div className="col s12  l4 ">
					<div className="card-panel white">
						<span className="grey-text text-darken-2">
							<div className="row">
								<div className="col s12 left-align">
									<i className="material-icons icon-bigger">person_outline</i>
								</div>
								<div className="col s12 right-align">Nome</div>
								<div className="col s12 right-align">Telefone</div>
								<div className="col s12 right-align">Email</div>
							</div>
						</span>
					</div>
				</div>
			</div>

			<div class="fixed-action-btn">
				<a class="btn-floating btn-large red">
					<i class="large material-icons white-text ">add</i>
				</a>
			</div>
		</div>
	);
};

export default Contacts;