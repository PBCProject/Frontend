import { Route, Routes } from 'react-router';
import { SignIn } from '../components/Auth/SignIn';
import { SignUp } from '../components/Auth/SignUp';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="login" element={<SignIn />} />
			<Route path="register" element={<SignUp />} />
		</Routes>
	);
};
