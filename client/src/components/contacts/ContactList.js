import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Spinner from "./../Layout/Spinner";

import {
	setLoading,
	getPaginatedContacts
} from "./../../actions/contactActions";

const ContactList = ({
	setLoading,
	getPaginatedContacts,
	contact: { loading, contacts }
}) => {
	useEffect(() => {
		setLoading();
		getPaginatedContacts(1, 6);
	}, []);

	if (loading) {
		return <Spinner />;
	} else {
		if (contacts !== null && contacts.length === 0)
			return (
				<div className="grey-text text-darken-2">
					Não há contatos para mostrar...
				</div>
			);
		return (
			<React.Fragment>
				{" "}
				<div className="row">
					{contacts !== null &&
						contacts.map(cont => (
							<div className="col s12  l4 " key={cont._id}>
								<div className="card-panel white">
									<span className="grey-text text-darken-2">
										<div className="row">
											<div className="col s12 right-align">
												<i className="material-icons icon-bigger indigo-text darken-4 btn-edit">
													edit
												</i>
												<i className="material-icons icon-bigger red-text darken-2 btn-delete">
													delete
												</i>
											</div>
											<div className="col s4 left-align"></div>

											<div className="col s12 left-align">{cont.name}</div>
											<div className="col s12 left-align">{cont.phone}</div>
											<div className="col s12 left-align">{cont.email}</div>
										</div>
									</span>
								</div>
							</div>
						))}
				</div>
			</React.Fragment>
		);
	}
};

const mapStateToProps = state => ({
	contact: state.contact
});

export default connect(mapStateToProps, {
	setLoading,
	getPaginatedContacts
})(ContactList);