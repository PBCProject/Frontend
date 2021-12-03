export function Registeru() {
	return (
		<div>
			<div className="modal" id="registerU">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="registerULabel">
								Registrarse
							</h5>
							<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Nombre Completo</label>
									<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Nombre" />
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Fecha de Nacimiento</label>
									<input type="date" className="form-control" id="exampleInputPassword1" placeholder="Fecha de Nacimiento" />
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Tipo de Documento</label>
									<select className="form-control">
										<option>C.C.</option>
										<option>T.E.</option>
										<option>NIT</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Numero de Documento</label>
									<input type="number" className="form-control" id="exampleInputPassword1" placeholder="Numero de Documento" />
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Fecha de Espedición del Documento</label>
									<input type="date" className="form-control" id="exampleInputPassword1" placeholder="Fecha de Nacimiento" />
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Valor de Ingresos</label>
									<input type="number" className="form-control" id="exampleInputPassword1" placeholder="Valor de Ingresos" />
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Valor de Egresos</label>
									<input type="number" className="form-control" id="exampleInputPassword1" placeholder="Valor de Egresos" />
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">Email</label>
									<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
									<small id="emailHelp" className="form-text text-muted">
										We'll never share your email with anyone else.
									</small>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Contraseña</label>
									<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Confirmar contraseña</label>
									<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
								Cerrar
							</button>
							<button type="button" className="btn btn-secondary">
								Registrarse
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
