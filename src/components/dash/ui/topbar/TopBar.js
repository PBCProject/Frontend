import { Link } from 'react-router-dom';
import { BarItem } from './BarItem';
import './TopBar.css';

const BarItems = [
	{ route: '/credits', title: 'Créditos' },
	{ route: '/accounts', title: 'Cuentas' },
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
