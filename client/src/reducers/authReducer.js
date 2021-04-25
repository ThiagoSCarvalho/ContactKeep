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
} from "./../actions/types";

const initialState = {
	user: null,
	isAuthenticated: false,
	token: localStorage.getItem("token"),
	loading: false,
	error: null
};


let actionState =  (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				token: action.payload.token,
				isAuthenticated: true,
				loading: false,
				error: null
			};

		case REGISTER_FAIL:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				user: null,
				loading: false,
				error: action.payload
			};

		case SET_LOADING:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
};

export default actionState