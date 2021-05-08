import {
	GET_CONTACTS,
	CONTACT_LOADING,
	CONTACT_ERROR,
	GET_TOTAL_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_PAGE,
	UPDATE_CONTACT,
	SET_CURRENT,
	CLEAR_FILTER,
	FILTER_CONTACT
} from "../actions/types";

const initialState = {
	contacts: null,
	currentContact: null,
	filteredContacts: null,
	loading: false,
	error: null,
	totalContacts: null,
	page: 1
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state,
				contacts: action.payload,
				loading: false
			};

		case ADD_CONTACT:
			return {
				...state,
				loading: false
			};
		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(con => con._id !== action.payload),
				filteredContacts:
					state.filteredContacts === null
						? null
						: state.filteredContacts.filter(con => con._id !== action.payload)
			};

		case UPDATE_CONTACT:
			return {
				...state,
				loading: false,
				contacts: state.contacts.map(con =>
					con._id === action.payload._id ? action.payload : con
				),
				filteredContacts:
					state.filteredContacts === null
						? null
						: state.filteredContacts.map(con =>
								con._id === action.payload._id ? action.payload : con
						  )
			};

		case SET_CURRENT:
			return {
				...state,
				currentContact: action.payload
			};

		case GET_TOTAL_CONTACTS:
			return {
				...state,
				totalContacts: action.payload,
				loading: false
			};

		case FILTER_CONTACT:
			return {
				...state,
				filteredContacts: action.payload,
				loading: false
			};

		case CLEAR_FILTER:
			return {
				...state,
				filteredContacts: null,
				loading: false
			};

		case CONTACT_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		case SET_PAGE:
			return {
				...state,
				page: action.payload
			};

		case CONTACT_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};