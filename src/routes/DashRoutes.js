import { Route, Routes } from 'react-router';
import { Accounts } from '../components/dash/content/Accounts';
import { Credits } from '../components/dash/content/Credits';
import { Help } from '../components/dash/content/Help';
import { Home } from '../components/dash/content/Home';
import { Settings } from '../components/dash/content/Settings';
import { Dash } from '../components/dash/Dash';

export const DashRoutes = () => {
	return (
		<Routes>
			<Route path="credits" element={<Dash Element={Credits} title="Creditos" />} />
			<Route path="accounts" element={<Dash Element={Accounts} title="Cuentas" />} />
			<Route path="help" element={<Dash Element={Help} title="Ayuda" />} />
			<Route path="settings" element={<Dash Element={Settings} title="Configuraciones" />} />
			<Route path="/" element={<Dash Element={Home} title="Pagina de Inicio" />} />
		</Routes>
	);
};
