import React, { useContext, useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../auth/authContext';
import { CreditRequests } from '../list/creditRequests';

const CREATE_CREDIT_REQUEST = gql`
	mutation ($creditRequest: CreditRequestInput!) {
		createCreditRequest(creditRequest: $creditRequest) {
			id
		}
	}
`;

const GET_CLIENT_CREDIT_REQUESTS = gql`
	query ($client: ID!) {
		getCreditRequestsByClient(client: $client) {
			id
			createdAt
			amountReq
			term
			client {
				name
			}
			isApproved
		}
	}
`;

export const CreditRequest = () => {
	const [mutation] = useMutation(CREATE_CREDIT_REQUEST);
	const { values, handleInputChange, reset } = useForm({ termino: 3, monto: 500000 });
	const { data: authData } = useContext(AuthContext);
	const { data: clientData, loading, error } = useQuery(GET_CLIENT_CREDIT_REQUESTS, { variables: { client: authData.user.id } });
	const handleSubmit = async e => {
		e.preventDefault();
		const async = async () => {
			const { data } = await mutation({
				variables: {
					creditRequest: {
						client: authData.user.id,
						term: values.termino,
						amountReq: values.monto,
					},
				},
				refetchQueries: [{ query: GET_CLIENT_CREDIT_REQUESTS, variables: { client: authData.user.id } }],
			});

			alert('La solicitud enviada correctamente ID: ' + data.createCreditRequest.id);
		};
		async();
	};

	return (
		<div className="row mt-4">
			<div className="col-md-6 offset-md-3">
				<h1>Solicitar Crédito</h1>
				<div className="card">
					<div className="card-body">
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label>Monto</label>
								<input type="number" className="form-control" value={values['monto']} name="monto" onChange={handleInputChange} />
							</div>
							<div className="form-group">
								<label> Plazo</label>
								<select className="form-control" value={values['termino']} name="termino" onChange={handleInputChange}>
									<option value="">Seleccione un plazo</option>
									<option value="3">3 meses</option>
									<option value="6">6 meses</option>
									<option value="12">12 meses</option>
								</select>
							</div>

							<br></br>
							<button className="btn btn-primary btn-block">Solicitar</button>
						</form>
					</div>
				</div>
				<div>{loading ? <p>Cargando...</p> : <CreditRequests creditRequests={clientData.getCreditRequestsByClient} />}</div>
			</div>
		</div>
	);
};
