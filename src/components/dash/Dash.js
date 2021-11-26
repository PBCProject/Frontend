import { Navbar } from './ui/navbar/Navbar';
import { TopBar } from './ui/topbar/TopBar';

export const Dash = ({ Element, title }) => {
	return (
		<>
			<Navbar title={title} />
			<TopBar />
			<div style={{ position: 'fixed', height: 'calc(100% - 67px)', width: '100%', overflowY: 'auto', overflowX: 'auto' }}>
				<Element />
			</div>
		</>
	);
};
