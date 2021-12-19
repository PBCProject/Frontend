import React from 'react';
import Logon from '../../assets/img/logon.png';
import Banner from '../../assets/img/auth/banner.svg';
import './Auth.css'
import {Link} from "react-router-dom";
import { Registeru } from './Registeru';

export const SignUp = () => {
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
			
						<Registeru/>

						<p className="mt-3 mb-0">
							<Link to="/auth/login" className = "text-info small">Ya tienes una cuenta?. Inicia sesion aqui.</Link>
						</p>
					</div>
				</div>
			</div>
		</div>

	);
};
