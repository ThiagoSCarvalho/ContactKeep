import React, { useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "./../Layout/Spinner";
import ContactItem from "./ContactItem";

import {
	setLoading,
	getPaginatedContacts
} from "./../../actions/contactActions";

const ContactList = ({
	setLoading,
	getPaginatedContacts,
    contact: { loading, contacts, error }
}) => {
	useEffect(() => {
		setLoading();
		getPaginatedContacts(1, 6);
		
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

		return (
			<React.Fragment>
				<div className="row">
                    {contacts !== null && contacts.length > 0 ? (
						contacts.map(cont => <ContactItem cont={cont} key={cont._id} />)
                        ) : (
                            <div className="grey-text text-darken-2">
                                Não há contatos para mostrar...
                            </div>
                        )}
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