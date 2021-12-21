import React from 'react';
import moment from 'moment-timezone';
import 'moment/locale/es';

export const CreditResponses = ({ creditResponses: creditResponsesRead }) => {
	if (creditResponsesRead == null)
		return (
			<>
				<h4 className="mt-5">No tienes ninguna respuesta aun</h4>
			</>
		);
	console.log(creditResponsesRead);
	var creditResponses = [...creditResponsesRead];
	creditResponses.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
	return (
		<table
			className="table"
			style={{
				width: '100%',
				overflowX: 'visible',
			}}>
			<thead>
				<tr>
					<th scope="col">Id</th>
					<th scope="col">Gestionado por</th>
					<th scope="col">Interes</th>
					<th scope="col">Mensaje</th>
					<th scope="col">Cuotas</th>
					<th scope="col">Id de la solicitud</th>
					<th scope="col">Valor aprobado</th>
					<th scope="col">Fecha de la solicitud</th>
					<th scope="col">Fecha de la respesta</th>
					<th scope="col">Estado</th>
				</tr>
			</thead>
			<tbody>
				{creditResponses.map(creditResponse => (
					<tr key={creditResponse.id}>
						<td>{creditResponse.id}</td>
						<td>{creditResponse.admin.name}</td>
						<td>{creditResponse.isApproved ? creditResponse.interest : '-'}</td>
						<td>{creditResponse.isApproved ? creditResponse.message : '-'}</td>

						<td>{creditResponse.creditRequest.term}</td>
						<td>{creditResponse.creditRequest.id}</td>
						<td>{creditResponse.amountAproved}</td>
						<td>
							{moment(new Date(+creditResponse.creditRequest.createdAt))
								.locale('es')
								.format('llll')}
						</td>
						<td>
							{moment(new Date(+creditResponse.createdAt))
								.locale('es')
								.format('llll')}
						</td>
						<td>{creditResponse.isApproved ? 'Aprobado y en curso' : 'Rechazado'}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
