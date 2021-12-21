// @ts-nocheck

import { Route, Routes } from 'react-router';
// @ts-ignore
import { Accounts } from '../components/dash/content/Accounts';
import { MyCredits } from '../components/dash/content/myCredits';
import { Certificates } from '../components/dash/content/Certificados';
// @ts-ignore
import { Request } from '../components/dash/content/request';
import { History } from '../components/dash/content/history';
import { Extension } from '../components/dash/content/Extension';
import { Payment } from '../components/dash/content/payment';
import { Messages } from '../components/dash/content/messages';
import { Help } from '../components/dash/content/help';
import { Home } from '../components/dash/content/home';
import { Settings } from '../components/dash/content/settings';
import { Profile } from '../components/dash/content/Profile';
import { Dash } from '../components/dash/dash';
import { Mregfun } from '../components/dash/content/Mregfun';

import { CreditRequest } from '../components/client/creditRequest';
import { LoggedRoute } from './loggedRoute';
import { MyCreditResponses } from '../components/dash/content/myCreditResponses';
import { CreditRequestListAdmin } from '../components/admin/creditRequestListAdmin';

const routes = [
	['creditrequest', CreditRequest, 'Solicitud de crédito'],
	['mycreditresponses', MyCreditResponses, 'Mis respuestas de credito'],
	['mycredits', MyCredits, 'Mis créditos'],
	['admcredits', CreditRequestListAdmin, 'ADM - Solicitudes de creditos', { isAdmin: true }],
	/*	['history', History, 'Historial'],
	['extension', Extension, 'Prorrogas'],
	['certificates', Certificates, 'Certificados'],
	['payment', Payment, 'Pagos'],
	['register', Mregfun, 'Registro'],
	['help', Help, 'Ayuda'],
	['settings', Settings, 'Configuración'],
	['profile', Profile, 'Perfil'],
	['messages', Messages, 'Mensajes'],*/
	['/', Home, 'Pagina de inicio', { hide: true }],
];

export const DashRoutes = () => {
	return (
		<Routes>
			{routes.map(([path, Component, title]) => (
				<Route
					key={path}
					path={path}
					element={
						<LoggedRoute>
							<Dash Element={Component} title={title} barItems={routes} />
						</LoggedRoute>
					}
				/>
			))}
		</Routes>
	);
};
