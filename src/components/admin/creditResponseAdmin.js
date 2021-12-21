import { gql, useMutation } from '@apollo/client';
import React, { useContext } from 'react';
import { AuthContext } from '../../auth/authContext';
import { useForm } from '../../hooks/useForm';

const RESPONSE_MUTATION = gql`
	mutation ($creditResponse: CreditResponseInput!) {
		createCreditResponse(creditResponse: $creditResponse) {
			id
		}
	}
`;

export const CreditResponseAdmin = ({ creditRequest, adminResponse }) => {
	const { data: authData } = useContext(AuthContext);
	const { values, handleInputChange, reset } = useForm();
	const [createCreditResponse] = useMutation(RESPONSE_MUTATION);
	const handleSubmit = e => {
		e.preventDefault();
		adminResponse(null);
		const async = async () => {
			const creditResponse = {
				admin: authData.user.id,
				creditRequest: creditRequest.id,
				amountAproved: creditRequest.amountReq,
				interest: +values.interest,
				isApproved: values.isApproved == 'true',
				message: values.message,
			};
			console.log(creditResponse);
			const { data } = await createCreditResponse({
				variables: {
					creditResponse,
				},
			});
			alert('Credit Response Created');
			adminResponse(null);
		};
		async();
	};
	return (
		<form className="card p-5">
			<div className="form-group">
				<h1>Respuesta credito</h1>
				<label htmlFor="interes">Respuesta</label>
				<select className="form-control" id="aprobado" name="isApproved" onChange={handleInputChange} value={values['isApproved']}>
					<option value={'true'}>Aprobado</option>
					<option value={'false'}>Rechazado</option>
				</select>
				<label htmlFor="interes">Interes</label>
				<input type="number" className="form-control" id="interes" name="interest" onChange={handleInputChange} value={values['interest']} />
				<label htmlFor="title1">Mensaje</label>
				<input type="text" className="form-control" id="message" name="message" value={values['message']} onChange={handleInputChange} placeholder="Escribe aqui tu respuesta" />
				<button type="submit" className="btn btn-primary mt-4" onClick={handleSubmit}>
					Responder
				</button>
				<button className="btn btn-primary mt-4" onClick={() => adminResponse(null)}>
					Cancelar
				</button>
			</div>
		</form>
	);
};
