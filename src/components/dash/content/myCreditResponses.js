import { gql, useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { AuthContext } from '../../../auth/authContext';
import { CreditResponses } from '../../list/creditResponses';

const CREDIT_RESPONSES_BY_CLIENT = gql`
	query ($client: ID!) {
		getCreditResponsesByClient(client: $client) {
			admin {
				name
			}
			id
			interest
			isApproved
			message
			creditRequest {
				id
				createdAt
				term
				createdAt
			}
			amountAproved

			createdAt
		}
	}
`;
export const MyCreditResponses = () => {
	const { data: authData } = useContext(AuthContext);
	const { data: clientData, loading, error } = useQuery(CREDIT_RESPONSES_BY_CLIENT, { variables: { client: authData.user.id } });

	return (
		<div className="container mt-4">
			<div className="row justify-content-center align-items-center">
				<h1>Mis respuestas de credito</h1>
				<p>¡Aqui encontraras todas las respuestas de credito a los creditos que haz aplicado!</p>
				{loading ? <p>Cargando...</p> : <CreditResponses creditResponses={clientData.getCreditResponsesByClient} />}
			</div>
		</div>
	);
};
