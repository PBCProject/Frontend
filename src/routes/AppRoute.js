import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';
import { DashRoutes } from './DashRoutes';
import { AuthReducer } from '../auth/authReducer';
import { useEffect, useReducer } from 'react';
import { AuthContext } from '../auth/authContext';
import { ApolloProvider } from '@apollo/client';

const init = () => {
	return (
		JSON.parse(localStorage.getItem('auth')) || {
			isAuthenticated: false,
			loading: false,
		}
	);
};

export const AppRoute = () => {
	const [data, dispatch] = useReducer(AuthReducer, {}, init);
	useEffect(() => {
		if (!data) return;
		localStorage.setItem('auth', JSON.stringify(data));
	}, [data]);

	return (
		<AuthContext.Provider
			value={{
				data,
				dispatch,
			}}>
			<BrowserRouter>
				<Routes>
					<Route path="/auth/*" element={<AuthRoutes />} />
					<Route path="/*" element={<DashRoutes />} />
				</Routes>
			</BrowserRouter>
		</AuthContext.Provider>
	);
};
