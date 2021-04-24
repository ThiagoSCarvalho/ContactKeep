const initialState = {
	user: null,
	isAuthenticated: false,
	token: localStorage.getItem("token"),
	loading: false,
	error: null
};


let actionState =  (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default actionState