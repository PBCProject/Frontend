import { Link } from 'react-router-dom';
import { BarItem } from './BarItem';
import './TopBar.css';

const BarItems = [
	{ route: '/credits', title: 'Créditos' },
	{ route: '/historial', title: 'Historial' },
	{ route: '/prorroga', title: 'Prórroga' },
	{ route: '/certificados', title: 'Certificados' },
	{ route: '/pagar', title: 'Pagar' },
	{ route: '/mensajes', title: 'Mensajes' },
	{ route: '/cuentas', title: 'Cuentas' },
	{ route: '/registerf', title: 'Resgitro' },
	{ route: '/help', title: 'Ayuda' },

];

export const TopBar = () => {
	return (
		<div id="menu" className="head">
			<nav>
				<ul>
					{BarItems.map((item, index) => (
						<BarItem key={index} {...item} />
					))}
				</ul>
			</nav>
		</div>
	);
};
