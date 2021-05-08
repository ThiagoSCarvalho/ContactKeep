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

// logar usuario
export const loginUser = formData => async dispatch => {
	try {
		const res = await fetch("/api/auth", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(formData)
		});

		if (res.ok) {
			const token = await res.json();

			M.toast({
				html: "Bem vindo!",
				classes: "toast-success"
			});

			return new Promise(function(resolve, reject) {
				resolve(
					dispatch({
						type: LOGIN_SUCCESS,
						payload: token
					})
				);
			});
		} else {
			const error = await res.json();
			console.error(error);
			dispatch({
				type: LOGIN_FAIL,
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

// cadastrar usuario
export const registerUser = formData => async dispatch => {
	try {
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

			return new Promise(function(resolve, reject) {
				resolve(
					dispatch({
						type: REGISTER_SUCCESS,
						payload: token
					})
				);
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

// seta usuario logado
export const setLoggedInUser = () => async dispatch => {
	try {
		const res = await fetch("/api/auth", {
			headers: {
				"x-auth-token": localStorage.getItem("token")
			}
		});

		if (res.ok) {
			const data = await res.json();

			dispatch({
				type: LOAD_USER,
				payload: data
			});
		}
	} catch (err) {
		console.error(err);
		dispatch({
			type: AUTH_ERROR,
			payload: err.response.msg
		});
	}
};

// logout
export const logout = () => {
	localStorage.removeItem("token");
	return {
		type: LOGOUT
	};
};

// loading
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};

// Limpar erros

export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};