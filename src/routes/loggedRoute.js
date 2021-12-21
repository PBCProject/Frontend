import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

export const LoggedRoute = ({ children }) => {
	const { data } = useContext(AuthContext);
	return data.user ? children : <Navigate to="/auth/login" />;
};
