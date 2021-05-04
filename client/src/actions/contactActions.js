import {
	GET_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	UPDATE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	FILTER_CONTACT,
	CLEAR_FILTER,
	CONTACT_ERROR,
	CONTACT_LOADING
} from "./types";

// buscar contatos paginado
export const getPaginatedContacts = (page, perPage) => async dispatch => {
	try {
		const token = localStorage.getItem("token");
		const res = await fetch(`api/contacts/?page=${page}&perPage=${perPage}`, {
			headers: {
				"x-auth-token": token
			}
		});

		const data = await res.json();

		dispatch({
			type: GET_CONTACTS,
			payload: data
		});
	} catch (err) {
		console.err(err);
		dispatch({
			type: CONTACT_ERROR,
			payload: err.msg
		});
	}
};
// add contato

// deletar contato

// atualizar contato

// setar contato atual

// filtrar contato

// loading
export const setLoading = () => {
	return {
		type: CONTACT_LOADING
	};
};