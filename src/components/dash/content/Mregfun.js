export const Mregfun = () => {
	return (
		<>
			<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
				Registrar funcionario
			</button>

			<div className="container">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Registro funcionario</h5>
						</div>
						<div className="modal-body">
							<form id="primero">
								<label htmlFor=""> Nombre completo:</label>
								<input type="text" className="form-control" />
								<label htmlFor=""> Usuario:</label>
								<input type="text" className="form-control" />
								<label htmlFor=""> Contraseña:</label>
								<input type="password" className="form-control" />

								<div className="modal-footer">
									<button type="button" className="btn btn-primary">
										Registrar
									</button>
									<button type="reset" className="btn btn-secondary" data-bs-dismiss="modal">
										Cancelar
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
