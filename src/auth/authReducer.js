export const AuthReducer = (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN':
			alert("You're logged in!");
			return {
				...action.payload,
				isAuthenticated: true,
				loading: false,
			};
		case 'LOGOUT':
			localStorage.removeItem('token');
			localStorage.clear();
			return null;
		case 'REGISTER':
			return {
				...action.payload,
				isAuthenticated: true,
				loading: false,
			};
		case 'LOADING':
			return {
				...action.payload,
				loading: true,
			};
		default:
			return state;
	}
};
