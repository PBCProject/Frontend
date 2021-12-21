import React, { useContext } from 'react';
import Logon from '../../assets/img/logon.png';
import Banner from '../../assets/img/auth/banner.svg';
import './Auth.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { useForm } from '../../hooks/useForm';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { useWhoiam } from '../../hooks/useWhoiam';

const LOGIN_QUERY = gql`
	mutation ($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
		}
	}
`;

export const Login = () => {
	const { values, handleInputChange, reset } = useForm({ email: '', password: '' });
	const [loginUser, { client }] = useMutation(LOGIN_QUERY);
	client.resetStore();
	const executeWoiam = useWhoiam();
	const navigate = useNavigate();
	const handleLogin = target => {
		target.preventDefault();
		loginUser({ variables: values })
			.then(async res => {
				const token = res.data.login.token;
				localStorage.clear();
				localStorage.setItem('token', token);
				const authLink = setContext((_, { headers }) => ({
					headers: {
						...headers,
						authorization: token ? `Bearer ${token}` : '',
					},
				}));
				client.setLink(authLink.concat(createHttpLink({ uri: 'http://localhost:4000' })));
				await executeWoiam(client);
				navigate('/', { replace: true });
			})
			.catch(err => {
				console.log(err);
				alert('Invalid email or password');
			});
	};
	return (
		<>
			<div className="container-fluid">
				<div className="row mh-100vh">
					<div
						className="col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0"
						id="login-block">
						<div className="m-auto w-lg-75 w-xl-50">
							<h1 className="text-dark text-info fw-light mb-5" style={{ color: 'black' }}>
								<img src={Logon} style={{ width: '50px', marginBottom: '-20px', marginTop: '-25px' }} />
								<strong>PBC App</strong>
							</h1>
							<p className="text-center text-black">
								<strong>INICIAR SESION</strong>
							</p>
							<form>
								<div className="form-group mb-3">
									<label className="form-label text-secondary">Usuario</label>
									<input className="form-control" type="text" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$" inputMode="email" onChange={handleInputChange} value={values['email']} />
								</div>
								<div className="form-group mb-3">
									<label className="form-label text-secondary">Contaseña</label>
									<input className="form-control" type="password" name="password" required onChange={handleInputChange} value={values['password']} />
								</div>
								<button className="btn btn-dark mt-2" type="submit" onClick={handleLogin}>
									Iniciar sesión
								</button>
							</form>
							<Link to="/auth/register" className="text-info small">
								No tienes una cuenta?, Registrate aqui
							</Link>
							<p className="mt-3 mb-0">
								<a className="text-info small" href="#">
									Perdiste tu usuario o contraseña?
								</a>
								<br />
							</p>
						</div>
					</div>
					<div className="col-lg-6 d-flex align-items-end" id="bg-block" style={{ backgroundImage: `url(${Banner})`, backgroundSize: '72%', backgroundPosition: 'center center' }} />
				</div>
			</div>
		</>
	);
};
