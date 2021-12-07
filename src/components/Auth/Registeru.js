export function Registeru() {
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
							<form>
								<div className="form-group">
									<label htmlFor="allname">Nombre Completo</label>
									<input type="text" className="form-control" id="allname" placeholder="Nombre" />
								</div>
								<div className="form-group">
									<label htmlFor="bDay">Fecha de Nacimiento</label>
									<input type="date" className="form-control" id="bDay" placeholder="Fecha de Nacimiento" />
								</div>
								<div className="form-group">
									<label htmlFor="TId">Tipo de Documento</label>
									<select className="form-control">
										<option>C.C.</option>
										<option>T.E.</option>
										<option>NIT</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="NumID">Numero de Documento</label>
									<input type="number" className="form-control" id="NumID" placeholder="Numero de Documento" />
								</div>
								<div className="form-group">
									<label htmlFor="ExpDate">Fecha de Espedición del Documento</label>
									<input type="date" className="form-control" id="ExpDate" placeholder="Fecha de Nacimiento" />
								</div>
								<div className="form-group">
									<label htmlFor="ValIn">Valor de Ingresos</label>
									<input type="number" className="form-control" id="ValIn" placeholder="Valor de Ingresos" />
								</div>
								<div className="form-group">
									<label htmlFor="ValEg">Valor de Egresos</label>
									<input type="number" className="form-control" id="ValEg" placeholder="Valor de Egresos" />
								</div>
								<div className="form-group">
									<label htmlFor="Email">Email</label>
									<input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" />
									<small id="emailHelp" className="form-text text-muted">
										We'll never share your email with anyone else.
									</small>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Contraseña</label>
									<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword2">Confirmar contraseña</label>
									<input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary">Cancelar</button>
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
