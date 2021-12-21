import { gql, useQuery } from '@apollo/client';
import { CreditRequests } from '../list/creditRequests';

import React, { useState } from 'react';
import { CreditResponseAdmin } from './creditResponseAdmin';

const GET_ALL_CREDIT_RESPONSES = gql`
	query {
		getCreditRequests {
			id
			createdAt
			term
			amountReq
			client {
				name
			}
			isApproved
		}
	}
`;

export const CreditRequestListAdmin = () => {
	const { data: clientData, loading, error } = useQuery(GET_ALL_CREDIT_RESPONSES);
	const [creditRequest, setCreditRequest] = useState(null);
	console.log(creditRequest);
	return (
		<div className="container">
			<h1>Solicitudes de creditos</h1>
			<p>Bienvenido administrador, aqui podras gestionar las solicitudes de creditos de los usuarios.</p>
			<br />
			{creditRequest != null ? (
				<CreditResponseAdmin creditRequest={creditRequest} adminResponse={creditRequest} />
			) : loading ? (
				<p>Cargando...</p>
			) : (
				<CreditRequests creditRequests={clientData.getCreditRequests} adminResponse={setCreditRequest} />
			)}
		</div>
	);
};
