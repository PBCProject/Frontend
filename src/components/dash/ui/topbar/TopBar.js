import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../auth/authContext';
import { BarItem } from './BarItem';
import './TopBar.css';

export const TopBar = ({ BarItems }) => {
	const { data } = useContext(AuthContext);
	const isAdmin = data.user.role.name === 'Administrador';
	return (
		<div id="menu" className="head">
			<nav>
				<ul>
					{BarItems.map(([path, Component, title, options], index) => {
						if (options && (options.hide || (options.isAdmin && !isAdmin))) return undefined;
						return <BarItem key={index} route={path} title={title} />;
					})}
				</ul>
			</nav>
		</div>
	);
};
