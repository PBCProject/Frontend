import { Route, Routes } from 'react-router';
import { Accounts } from '../components/dash/content/Accounts';
import { Credits } from '../components/dash/content/Credits';
import { Certificados } from '../components/dash/content/Certificados';
import { Solicitar } from '../components/dash/content/Solicitar';
import { Historial } from '../components/dash/content/Historial';
import { Prorroga } from '../components/dash/content/Prorroga';
import { Pagar} from '../components/dash/content/Pagar';
import { Mensajes} from '../components/dash/content/Mensajes';
import { Help } from '../components/dash/content/Help';
import { Home } from '../components/dash/content/Home';
import { Settings } from '../components/dash/content/Settings';
import { Dash } from '../components/dash/Dash';

export const DashRoutes = () => {
	return (
		<Routes>
			<Route path="credits" element={<Dash Element={Credits} title="Créditos" />} />
			<Route path="historial" element={<Dash Element={Historial} title="Historial" />} />
			<Route path="prorroga" element={<Dash Element={Prorroga} title="Prorroga" />} />
			<Route path="certificados" element={<Dash Element={Certificados} title="Certificados" />} />
			<Route path="pagar" element={<Dash Element={Pagar} title="Pagar" />} />
			<Route path="pagar" element={<Dash Element={Pagar} title="Pagar" />} />
			<Route path="cuentas" element={<Dash Element={Accounts} title="Cuentas" />} />
			

			<Route path="help" element={<Dash Element={Help} title="Ayuda" />} />
			<Route path="settings" element={<Dash Element={Settings} title="Configuraciones" />} />
			<Route path="/" element={<Dash Element={Home} title="Pagina de Inicio" />} />
		</Routes>
	);
};
