import { Route, Routes } from 'react-router';
import { SignIn } from '../components/auth/SignIn';
import { SignUp } from '../components/auth/SignUp';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="signin" element={<SignIn />} />
			<Route path="signup" element={<SignUp />} />
		</Routes>
	);
};
