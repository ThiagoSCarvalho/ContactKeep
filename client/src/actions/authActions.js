import M from "materialize-css/dist/js/materialize.min.js";

import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGOUT,
	AUTH_ERROR,
	LOAD_USER,
	SET_LOADING,
	CLEAR_ERRORS
} from "./types";

import { useDispatch } from "react-redux";
// logar usuario

// cadastrar usuario
export const registerUser = formData => async dispatch => {
	try {
		setLoading();

		const res = await fetch("/api/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(formData)
		});

		if (res.ok) {
			const token = await res.json();

			M.toast({
				html: "Usuário Cadastrado com sucesso",
				classes: "toast-success"
			});

			dispatch({
				type: REGISTER_SUCCESS,
				payload: token
			});
		} else {
			const error = await res.json();

			console.error(error);
			dispatch({
				type: REGISTER_FAIL,
				payload: error
			});
		}
	} catch (err) {
		console.error(err);
		dispatch({
			type: REGISTER_FAIL,
			payload: err.response.msg
		});
	}
};
// logout

// seta usuario logado

// loading
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};