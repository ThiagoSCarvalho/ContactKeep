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
	GET_TOTAL_CONTACTS,
	SET_PAGE
} from "./types";

// buscar contatos paginado
export const getPaginatedContacts = (
	page = 1,
	perPage = 6
) => async dispatch => {
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

// add contato]

export const addContact = formData => async dispatch => {
	try {
		const token = localStorage.getItem("token");

		const res = await fetch("api/contacts", {
			method: "POST",
			headers: {
				"x-auth-token": token,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(formData)
		});

		if (res.ok) {
			dispatch({
				type: ADD_CONTACT
			});
		} else {
			const error = await res.json();
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

// deletar contato

export const deleteContact = id => async dispatch => {
	try {
		const token = localStorage.getItem("token");

		await fetch(`api/contacts/${id}`, {
			method: "DELETE",
			headers: {
				"x-auth-token": token
			}
		});

		dispatch({
			type: DELETE_CONTACT,
			payload: id
		});
	} catch (error) {
		console.error(error);
		dispatch({
			type: CONTACT_ERROR,
			payload: error
		});
	}
};

// atualizar contato

// setar contato atual

// filtrar contato

// loading
export const setLoading = () => {
	return {
		type: CONTACT_LOADING
	};
};

// seta pagina atual

export const setPage = page => {
	return {
		type: SET_PAGE,
		payload: page
	};
};