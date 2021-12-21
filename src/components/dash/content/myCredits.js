import { useQuery, gql } from '@apollo/client';
import { useContext } from 'react';
import { AuthContext } from '../../../auth/authContext';
import { Credits } from '../../list/credits';

const GET_CREDITS_QUERY = gql`
	query ($client: ID!) {
		getCreditsByClient(client: $client) {
			id
			nextPaymentDate
			startDate
			creditState {
				name
			}
			creditResponse {
				admin {
					name
				}
				creditRequest {
					createdAt
				}
			}
		}
	}
`;

export const MyCredits = () => {
	const { data: authData } = useContext(AuthContext);
	const { data, loading, error } = useQuery(GET_CREDITS_QUERY, { variables: { client: authData.user.id } });
	return (
		<div className="container mt-4">
			<div className="row justify-content-center align-items-center">
				<h1>Mis creditos</h1>
				<p>¡Aqui encontraras todos tus creditos aprobados y su estado actual </p>
				{loading ? <p>Cargando...</p> : <Credits creditsRead={data.getCreditsByClient} />}
			</div>
		</div>
	);
};
