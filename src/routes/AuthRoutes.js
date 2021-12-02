import { Route, Routes } from 'react-router';
import { SignIn } from '../components/Auth/SignIn';
import { SignUp } from '../components/Auth/SignUp';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="signin" element={<SignIn />} />
			<Route path="signup" element={<SignUp />} />
		</Routes>
	);
};
