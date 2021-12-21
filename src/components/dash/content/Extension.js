import { Formsencillo } from '../ui/forms/Formsencillo';

const SelectOpt = [
	{ llave: '1', valor: '1' },
	{ llave: '2', valor: '2' },
	{ llave: '3', valor: '3' },
	{ llave: '4', valor: '4' },
	{ llave: '5', valor: '5' },
	{ llave: '6', valor: '6' },
	{ llave: '7', valor: '7' },
	{ llave: '8', valor: '8' },
	{ llave: '9', valor: '9' },
	{ llave: '10', valor: '10' },
	{ llave: '11', valor: '11' },
	{ llave: '12', valor: '12' },
];

export const Extension = () => {
	return (
		<>
			<Formsencillo title="Solicitar Prorroga" titlebox="Motivo" titlesel="Cuotas" SelectOpt={SelectOpt}></Formsencillo>
		</>
	);
};
