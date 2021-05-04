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
	CONTACT_LOADING,
	GET_TOTAL_CONTACTS
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

		if (res.ok) {
			const data = await res.json();

			dispatch({
				type: GET_CONTACTS,
				payload: data
			});
		} else {
			const error = await res.json();
			console.log(error);
			dispatch({
				type: CONTACT_ERROR,
				payload: error
			});
		}
	} catch (error) {
		console.error(error);
		dispatch({
			type: CONTACT_ERROR,
			payload: error
		});
	}
};

// busca numero total de contatos
export const getTotalContacts = () => async dispatch => {
	const token = localStorage.getItem("token");
	try {
		const res = await fetch("api/contacts", {
			headers: {
				"x-auth-token": token
			}
		});

		const data = await res.json();

		dispatch({
			type: GET_TOTAL_CONTACTS,
			payload: data.length
		});
	} catch (error) {
		dispatch({
			type: CONTACT_ERROR,
			payload: error
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