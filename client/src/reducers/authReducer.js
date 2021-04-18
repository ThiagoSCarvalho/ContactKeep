const initialState = {
	user: null,
	isAuthenticated: false,
	token: localStorage.getItem("token"),
	loading: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};