import React, { useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "./../Layout/Spinner";
import ContactItem from "./ContactItem";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import {
	setLoading,
	getPaginatedContacts
} from "./../../actions/contactActions";

const ContactList = ({
	setLoading,
	getPaginatedContacts,
	contact: { loading, contacts, error, filteredContacts }
}) => {
	useEffect(() => {
		setLoading();
		getPaginatedContacts(1, 6);
		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <Spinner />;
	} else {
		if (error !== null) {
			return (
				<div className="grey-text text-darken-2">
					Houve um erro ao tentar buscar dados do servidor. Tente novamente mais
					tarde.
				</div>
			);
		}

		if (filteredContacts !== null) {
			return filteredContacts.length > 0 ? (
				<div className="row">
					<TransitionGroup>
						{filteredContacts.map(cont => (
							<CSSTransition
								key={cont._id}
								timeout={{ enter: 350 }}
								classNames="fade"
							>
								<ContactItem cont={cont} />
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
			) : (
				<div className="grey-text text-darken-2">
					Não teve resultado para sua busca...
				</div>
			);
		}

		return (
			<div className="row">
				{contacts !== null && contacts.length > 0 ? (
					<TransitionGroup>
						{contacts.map(cont => (
							<CSSTransition
								classNames="fade"
								timeout={{ enter: 350 }}
								key={cont._id}
							>
								<ContactItem cont={cont} />
							</CSSTransition>
						))}
					</TransitionGroup>
				) : (
					<div className="grey-text text-darken-2">
						Não há contatos para mostrar...
					</div>
				)}
			</div>
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