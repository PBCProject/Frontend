import { useEffect } from 'react';
import '../navbar/Navbar.css';
import { Notification } from './Notification';

export const Notifications = ({
	notifications = [
		{
			id: 1,
			title: 'Tu primera notificacion!',
			message: 'Binvenido a PCE App',
			time: new Date().toLocaleTimeString(),
		},
	],
}) => {
	return (
		<div className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4">
			{notifications.map(notification => (
				<Notification key={notification.id} {...notification} />
			))}
		</div>
	);
};
