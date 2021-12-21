import React from 'react';
import moment from 'moment-timezone';
import 'moment/locale/es';

export const Credits = ({ creditsRead }) => {
	const credits = [...creditsRead];
	credits.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Id</th>
					<th scope="col">Fecha proximo pago</th>
					<th scope="col">Fecha de inicio</th>
					<th scope="col">Estado</th>
					<th scope="col">Gestionado por</th>
					<th scope="col">Fecha de solicitud</th>
				</tr>
			</thead>
			<tbody>
				{credits.map(credit => (
					<tr key={credit.id}>
						<td>{credit.id}</td>
						<td>
							{moment(new Date(+credit.nextPaymentDate))
								.locale('es')
								.format('llll')}
						</td>
						<td>
							{moment(new Date(+credit.startDate))
								.locale('es')
								.format('llll')}
						</td>
						<td>{credit.creditState.name}</td>
						<td>{credit.creditResponse.admin.name}</td>
						<td>
							{moment(new Date(+credit.creditResponse.creditRequest.createdAt))
								.locale('es')
								.format('llll')}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
