import { Route, Routes } from 'react-router';
import { SignIn } from '../components/auth/SignIn';
import { Home } from '../components/dash/content/Home';
import { Settings } from '../components/dash/content/Settings';
import { Dash } from '../components/dash/Dash';

export const DashRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Dash Element={Home} title="Pagina de Inicio" />} />
			<Route path="/settings" element={<Dash Element={Settings} title="Configuraciones" />} />
		</Routes>
	);
};
