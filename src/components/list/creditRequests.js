import React, { useContext } from 'react';
import moment from 'moment-timezone';
import 'moment/locale/es';
import { AuthContext } from '../../auth/authContext';

export const CreditRequests = ({ creditRequests: creditRequestsRead, adminResponse }) => {
	var creditRequests = [...creditRequestsRead];
	creditRequests.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));

	const { data: authData } = useContext(AuthContext);
	const isAdmin = authData.user.role.name === 'Administrador';

	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">id</th>
					<th scope="col">Creado en</th>
					<th scope="col">Monto</th>
					<th scope="col">Cuotas</th>
					<th scope="col">Creado por</th>
					<th scope="col">Estado</th>
					{isAdmin && <th scope="col">Acciones</th>}
				</tr>
			</thead>
			<tbody>
				{creditRequests.map(creditRequest => (
					<tr key={creditRequest.id}>
						<td>{creditRequest.id}</td>
						<td>
							{moment(new Date(+creditRequest.createdAt))
								.locale('es')
								.format('llll')}
						</td>
						<td>{creditRequest.amountReq}</td>
						<td>{creditRequest.term}</td>
						<td>{creditRequest.client.name}</td>
						<td>{creditRequest.isApproved == null ? 'En revision' : creditRequest.isApproved ? 'Aprobado' : 'Rechazado'}</td>
						{isAdmin && (
							<td>
								<button className="btn btn-primary" onClick={() => adminResponse(creditRequest)}>
									Dar respuesta
								</button>
							</td>
						)}
					</tr>
				))}
			</tbody>
		</table>
	);
};
