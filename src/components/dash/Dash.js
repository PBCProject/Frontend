import { Navbar } from './ui/navbar/Navbar';
import { TopBar } from './ui/topbar/TopBar';

export const Dash = ({ Element, title, barItems }) => {
	return (
		<>
			<Navbar title={title} />
			<TopBar BarItems={barItems} />
			<div style={{ position: 'fixed', height: 'calc(100% - 111px)', width: '100%', overflowY: 'auto', overflowX: 'auto' }}>
				<Element />
			</div>
		</>
	);
};
