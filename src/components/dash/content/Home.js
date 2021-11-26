import { Card } from '../ui/card/Card';

const cards = [
	{ title: 'Informacion general', descripcion: 'Revisa tu informacion personal, como telefono de contacto, email y direccion.', icon: 'fas fa-info-circle', path: 'Configuraciones' },
	{ title: 'Informacion de creditos', descripcion: 'Revisa los creditos que tienes, y si estan activos o no.', icon: 'fas fa-credit-card', path: 'Creditos' },
	{ title: 'Informacion de cuentas', descripcion: 'Revisa las cuentas que tienes, y si estan activas o no.', icon: 'fas fa-wallet', path: 'Cuentas' },
];

export const Home = () => {
	return (
		<div className="text-secondary px-4 py-5 text-center h-100 w-100" style={{ background: 'black' }}>
			<h1 className="display-5 fw-bold text-white">
				<strong>¡Bienvenido!</strong>
				<br />
			</h1>
			<div className="col-lg-9 mx-auto text-white">
				<p className="fs-6 mb-4">
					PBC o Plataforma bancaria de creditos es una plataforma ligada a Bancolombia, que permite a los usuarios registrarse y realizar transacciones de crédito. <br />
					Acciones como conocer tu estado de credito, realizar pagos, realizar transferencias, realizar solicitudes de crédito, etc.
				</p>
			</div>
			<div className="col-lg-9 mx-auto row flex-row flex-wrap mt-5" style={{ width: '1100px' }}>
				{cards.map((card, index) => (
					<div className="col justify-content-center d-flex mb-2">
						<Card {...card} />
					</div>
				))}
			</div>
		</div>
	);
};
