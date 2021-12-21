import { Route, Routes } from 'react-router';
import { Login } from '../components/auth/login';
import { Register } from '../components/auth/register';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="login" element={<Login />} />
			<Route path="register" element={<Register />} />
		</Routes>
	);
};
