import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Notifications } from '../notifications/Notifications';
import './Navbar.css';

export const Navbar = ({ title = 'Dashboard' }) => {
	const location = useLocation();
	const [notification, setNotification] = useState(false);
	return (
		<nav className="navbar navbar-light navbar-expand-md navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none" id="navbarBlur" navbar-scroll="true">
			<div className="container-fluid">
				<div className="container-fluid py-2 px-0">
					<ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
						<li className="breadcrumb-item text-sm">
							<a href="#">
								<span className="opacity-5 text-dark" />
							</a>
							<Link to="/" className="opacity-5 text-dark">
								Inicio
							</Link>
						</li>
						<li className="breadcrumb-item active">
							<span className="text-sm text-dark active">{location.pathname.replace('/', '').replace(' ', '')}</span>
						</li>
					</ol>
					<h6 className="font-weight-bolder mb-0">{title}</h6>
				</div>
				<button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbar">
					<span className="visually-hidden">Toggle navigation</span>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 w-100" id="navbar">
					<div className="ms-md-auto pe-md-3 d-flex align-items-center">
						<div className="input-group">
							<span className="input-group-text text-body p-0 m-0">
								<a className="fas fa-search p-2" aria-hidden="true" />
								<input className="form-control-sm form-control mr-2" type="text" placeholder="Buscar" style={{ border: 'none' }} />
							</span>
						</div>
					</div>
					<ul className="navbar-nav justify-content-end">
						<li className="nav-item d-flex align-items-center">
							<a className="nav-link text-body font-weight-bold px-0">
							<Link to="/profile" className="nav-link text-body p-0">
								<i className="fa fa-user me-sm-1" />
								<span className="d-sm-inline d-none">User</span>
							</Link>
							</a>
						</li>
						<li className="nav-item px-3 d-flex align-items-center">
							<Link to="/settings" className="nav-link text-body p-0">
								<i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
							</Link>
						</li>
						<li className="nav-item dropdown pe-2 d-flex align-items-center" onClick={() => setNotification(!notification)}>
							<div>
								<div className="dropdown nav-item pe-2 d-flex align-items-center">
									<a aria-expanded="false" data-bs-toggle="dropdown" id="dropdownMenuButton" className="nav-link text-body p-0">
										<i className="fa fa-bell" />
									</a>
								</div>
								{notification && <Notifications />}
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
