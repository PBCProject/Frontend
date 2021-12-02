import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';
import { DashRoutes } from './DashRoutes';


export const AppRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth/*" element={<AuthRoutes />} />
				<Route path="/*" element={<DashRoutes />} />
				
				
			</Routes>
		</BrowserRouter>
	);
};
