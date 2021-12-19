import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import React from 'react';

const REGISTER_USER = gql`
	mutation register($name: String!, $email: String!, $password: String!, $identification: String!, $identificationtype: String!, $documentDate: String!, $birthDate: String!, $revenueValue: String!, $expensesValue: String!, $phone: String!, $address: String!, $city: String!, $state: String!, $country: String!, $zipcode: String!, $latitude: String!, $longitude: String!, $status: String!, $createdAt: String!, $updatedAt: String!) 
	{
  		register(
		  	name: $name,
			email: $email,
			password: $password,
			identificationtype: $identificationtype,
			identification: $identification,
			documentDate: $documentDate,
			birthDate: $birthDate,
			revenueValue: $revenueValue,
			expensesValue: $expensesValue					
		)
		{
			name
			email
			password
    		clientInfo {
				identificationtype
      			identification
				documentDate
      			birthDate
      			expensesValue
      			revenueValue
    		}
			id
		}
	}
`;

export const Registeru = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [identificationtype, setIdentificationtype] = useState('');
	const [identification, setIdentification] = useState('');
	const [documentDate, setDocumentDate] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [revenueValue, setRevenueValue] = useState('');
	const [expensesValue, setExpensesValue] = useState('');
	console.log(name, email, password, identificationtype, identification, documentDate, birthDate, revenueValue, expensesValue);
	const [createUser] = useMutation(REGISTER_USER);
	const handleSubmit = async e => {
	e.preventDefault();
		await createUser({
			variables: {
				name,
				email,
				password,
				identificationtype,
				identification,
				documentDate,
				birthDate,
				revenueValue,
				expensesValue
			}
		});

		setName('');
		setEmail('');
		setPassword('');
		setIdentificationtype('');
		setIdentification('');
		setDocumentDate('');
		setBirthDate('');
		setRevenueValue('');
		setExpensesValue('');
	};

	

	return (
		<div>
			<div id="registerU">
				<div role="document">
					<div className="content">
						<div className="modal-header">
							<h5 className="title" id="registerULabel">
								Registrarse
							</h5>

						</div>
						<div className="modal-body">
							<form onSubmit={handleSubmit} >
								<div className="form-group">
									<label htmlFor="allname">Nombre Completo</label>
									<input type="text" className="form-control" id="allname" placeholder="Nombre"  value={name} onChange={ e => setName(e.target.value) } />
								</div>
								<div className="form-group">
									<label htmlFor="bDay">Fecha de Nacimiento</label>
									<input type="date" className="form-control" id="bDay" placeholder="Fecha de Nacimiento"  value={birthDate} onChange={ e => setBirthDate(e.target.value) }/>
								</div>
								<div className="form-group">
									<label htmlFor="TId">Tipo de Documento</label>
									<select className="form-control"  value={identificationtype} onChange={ e => setIdentificationtype(e.target.value) }>
										<option>C.C.</option>
										<option>T.E.</option>
										<option>NIT</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="NumID">Numero de Documento</label>
									<input type="number" className="form-control" id="NumID" placeholder="Numero de Documento"  value={identification} onChange={ e => setIdentification(e.target.value) }/>
								</div>
								<div className="form-group">
									<label htmlFor="ExpDate">Fecha de Espedición del Documento</label>
									<input type="date" className="form-control" id="ExpDate" placeholder="Fecha de Nacimiento"  value={documentDate} onChange={ e => setDocumentDate(e.target.value) }/>
								</div>
								<div className="form-group">
									<label htmlFor="ValIn">Valor de Ingresos</label>
									<input type="number" className="form-control"  placeholder="Valor de Ingresos"  value={revenueValue} onChange={ e => setRevenueValue(e.target.value) }/>
								</div>
								<div className="form-group">
									<label htmlFor="ValEg">Valor de Egresos</label>
									<input type="number" className="form-control"  placeholder="Valor de Egresos"  value={expensesValue} onChange={ e => setExpensesValue(e.target.value) }/>
								</div>
								<div className="form-group">
									<label htmlFor="Email">Email</label>
									<input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email"  value={email} onChange={ e => setEmail(e.target.value) }/>
									<small id="emailHelp" className="form-text text-muted">
										We'll never share your email with anyone else.
									</small>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Contraseña</label>
									<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  value={password} onChange={ e => setPassword(e.target.value) }/>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword2">Confirmar contraseña</label>
									<input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" value={password} onChange={ e => setPassword(e.target.value)}/>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary">Cancelar</button>
							<button type="submit" className="btn btn-success">
								Registrarse
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
