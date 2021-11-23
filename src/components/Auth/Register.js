import React, { useState } from 'react';
import Logon from '../../assets/img/logon.png';
import Banner from '../../assets/img/auth/banner.svg';
import './Auth.css'

export const Register = () => {
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
						<form>
							<div className="form-group mb-3">
								<label className="form-label text-secondary">Usuario</label>
								<input className="form-control" type="text" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$" inputMode="email" />
							</div>
							<div className="form-group mb-3">
								<label className="form-label text-secondary">Contaseña</label>
								<input className="form-control" type="password" required />
							</div>
							<button className="btn btn-dark mt-2" type="submit">
                Registrarse
							</button>
						</form>
						<p className="mt-3 mb-0">
							<a className="text-info small" href="#">
								Perdiste tu usuario o contraseña?
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
