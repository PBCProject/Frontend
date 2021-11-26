import { Navbar } from './ui/navbar/Navbar';

export const Dash = ({ Element, title }) => {
	return (
		<>
			<Navbar title={title} />
			<div style={{ position: 'fixed', height: 'calc(100% - 67px)', width: '100%', overflowY: 'auto', overflowX: 'auto' }}>
				<Element />
			</div>
		</>
	);
};
