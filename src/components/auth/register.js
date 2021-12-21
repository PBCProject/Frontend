import React, { useState } from 'react';
import Logon from '../../assets/img/logon.png';
import Banner from '../../assets/img/auth/banner.svg';
import './Auth.css';
import { Link } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

const CREATE_USER = gql`
	mutation CreateUser($user: UserInput!) {
		createUser(user: $user) {
			id
		}
	}
`;

export const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [identificationType, setIdentificationType] = useState('');
	const [identification, setIdentification] = useState('');
	const [documentDate, setDocumentDate] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [revenueValue, setRevenueValue] = useState('');
	const [expensesValue, setExpensesValue] = useState('');
	const [createUser] = useMutation(CREATE_USER);
	const handleSubmit = e => {
		e.preventDefault();
		const revenue = parseFloat(revenueValue);
		const expenses = parseFloat(expensesValue);
		createUser({
			variables: {
				user: {
					name,
					email,
					password,
					clientInfo: {
						identificationType,
						identification,
						documentDate,
						birthDate,
						revenueValue: revenue,
						expensesValue: expenses,
					},
				},
			},
		});
		setName('');
		setEmail('');
		setPassword('');
		setIdentificationType('');
		setIdentification('');
		setDocumentDate('');
		setBirthDate('');
		setRevenueValue('');
		setExpensesValue('');
	};
	return (
		<div className="container-fluid">
			<div className="row mh-100vh">
				<div className="col-lg-6 d-flex align-items-end" id="bg-block" style={{ backgroundImage: `url(${Banner})`, backgroundSize: '72%', backgroundPosition: 'center center' }} />
				<div
					id="login-block"
					className="col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0">
					<div className="m-auto w-lg-75 w-xl-50">
						<h1 className="text-dark text-info fw-light mb-5" style={{ color: 'black' }}>
							<img src={Logon} style={{ width: '50px', marginBottom: '-20px', marginTop: '-25px' }} />
							<strong>PBC App</strong>
						</h1>

						<div id="registerU">
							<div className="card">
								<h5 className="title" id="registerULabel">
									Registrarse
								</h5>
							</div>
							<div className="card-body">
								<form onSubmit={handleSubmit}>
									<div className="form-group">
										<label htmlFor="allname">Nombre Completo</label>
										<input type="text" className="form-control" placeholder="Nombre" onChange={evt => setName(evt.target.value)} value={name} />
									</div>
									<div className="form-group">
										<label htmlFor="bDay">Fecha de Nacimiento</label>
										<input type="date" className="form-control" placeholder="Fecha de Nacimiento" onChange={evt => setBirthDate(evt.target.value)} value={birthDate} />
									</div>
									<div className="form-group">
										<label htmlFor="TId">Tipo de Documento</label>
										<select className="form-control" onChange={evt => setIdentificationType(evt.target.value)} value={identificationType}>
											<option>Sleccion El tipo de Documento</option>
											<option>C.C.</option>
											<option>T.E.</option>
											<option>NIT</option>
										</select>
									</div>
									<div className="form-group">
										<label htmlFor="NumID">Numero de Documento</label>
										<input type="number" className="form-control" placeholder="Numero de Documento" onChange={evt => setIdentification(evt.target.value)} value={identification} />
									</div>
									<div className="form-group">
										<label htmlFor="ExpDate">Fecha de Espedición del Documento</label>
										<input type="date" className="form-control" placeholder="Fecha de Nacimiento" onChange={evt => setDocumentDate(evt.target.value)} value={documentDate} />
									</div>
									<div className="form-group">
										<label htmlFor="ValIn">Valor de Ingresos</label>
										<input type="number" className="form-control" placeholder="Valor de Ingresos" onChange={evt => setRevenueValue(evt.target.value)} value={revenueValue} />
									</div>
									<div className="form-group">
										<label htmlFor="ValEg">Valor de Egresos</label>
										<input type="number" className="form-control" placeholder="Valor de Egresos" onChange={evt => setExpensesValue(evt.target.value)} value={expensesValue} />
									</div>
									<div className="form-group">
										<label htmlFor="Email">Email</label>
										<input type="email" className="form-control" placeholder="Enter email" onChange={evt => setEmail(evt.target.value)} value={email} />
										<small id="emailHelp" className="form-text text-muted">
											We'll never share your email with anyone else.
										</small>
									</div>
									<div className="form-group">
										<label htmlFor="exampleInputPassword1">Contraseña</label>
										<input type="password" className="form-control" placeholder="Password" onChange={evt => setPassword(evt.target.value)} value={password} />
									</div>
									<div className="form-group">
										<label htmlFor="exampleInputPassword2">Confirmar contraseña</label>
										<input type="password" className="form-control" placeholder="Password" onChange={evt => setPassword(evt.target.value)} value={password} />
									</div>
									<div className="form-group">
										<button type="submit" className="btn btn-success">
											Registrarse
										</button>
									</div>
								</form>
							</div>
						</div>

						<p className="mt-3 mb-0">
							<Link to="/auth/login" className="text-info small">
								Ya tienes una cuenta?. Inicia sesion aqui.
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
