import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';
import { DashRoutes } from './DashRoutes';
import { ClientRoute } from './ClientRoute';



export const AppRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth/*" element={<AuthRoutes />} />
				<Route path="/client/*" element={<ClientRoute />} />
				<Route path="/*" element={<DashRoutes />} />
				
				
			</Routes>
		</BrowserRouter>
	);
};
