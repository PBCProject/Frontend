import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';


const CREATE_USER = gql`
	mutation createUser($user: UserInput!) 
	{
  		createUser(
		  user: {
				name: $name,
				email: $email,
				password: $password,
				clientInfo: {
					identificationType: $identificationtype,
					identification: $identification,
					documentDate: $documentDate,
					birthDate: $birthDate,
					revenueValue: $revenueValue,
					expensesValue: $expensesValue
				}				
		  	}
		)
		{
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
	const [createUser, {data,loading,error}] = useMutation(CREATE_USER);
	if (loading) return 'Submitting...';
	if (error) return `Submission error! ${error.message}`;
	const handleSubmit =  e => {
	e.preventDefault();
		createUser({
			variables: {
				user: {
					name,
					email,
					password,
					clientInfo: {
						identificationtype,
						identification,
						documentDate,
						birthDate,
						revenueValue,
						expensesValue
					}
				}
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
		<div id="registerU">
			<div className="card">
				<h5 className="title" id="registerULabel">
					Registrarse
				</h5>
			</div>
			<div className="card-body">
				<form onSubmit={handleSubmit} >
					<div className="form-group">
						<label htmlFor="allname">Nombre Completo</label>
						<input type="text" className="form-control" placeholder="Nombre"  value={name} onChange={ e => setName(e.target.value) } />
					</div>
					<div className="form-group">
						<label htmlFor="bDay">Fecha de Nacimiento</label>
						<input type="date" className="form-control" placeholder="Fecha de Nacimiento"  value={birthDate} onChange={ e => setBirthDate(e.target.value) }/>
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
						<input type="number" className="form-control" placeholder="Numero de Documento"  value={identification} onChange={ e => setIdentification(e.target.value) }/>
					</div>
					<div className="form-group">
						<label htmlFor="ExpDate">Fecha de Espedición del Documento</label>
						<input type="date" className="form-control" placeholder="Fecha de Nacimiento"  value={documentDate} onChange={ e => setDocumentDate(e.target.value) }/>
					</div>
					<div className="form-group">
						<label htmlFor="ValIn">Valor de Ingresos</label>
						<input type="number" className="form-control"  placeholder="Valor de Ingresos"  value={revenueValue} onChange={ e => setRevenueValue(e.target.value) }/>
					</div>
					<div className="form-group">
						<label htmlFor="ValEg">Valor de Egresos</label>
						<input type="number" className="form-control" placeholder="Valor de Egresos"  value={expensesValue} onChange={ e => setExpensesValue(e.target.value) }/>
					</div>
					<div className="form-group">
						<label htmlFor="Email">Email</label>
						<input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"  value={email} onChange={ e => setEmail(e.target.value) }/>
						<small id="emailHelp" className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Contraseña</label>
						<input type="password" className="form-control"  placeholder="Password"  value={password} onChange={ e => setPassword(e.target.value) }/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword2">Confirmar contraseña</label>
						<input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" value={password} onChange={ e => setPassword(e.target.value)}/>
					</div>
				</form>
			</div>
			<div className="card-footer">				
				<button type="submit" className="btn btn-success" >
					Registrarse
				</button>
			</div>
		</div>
	);
}
