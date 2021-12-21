import { Link } from 'react-router-dom';

export const BarItem = ({ route, title }) => {
	return (
		<li>
			<Link to={'/' + route}>{title}</Link>
		</li>
	);
};
