export const Payment = () => {
	return (
		<>
			<div className="container">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Pagar</h5>
						</div>
						<div className="modal-body">
							<form id="primero">
								<label htmlFor=""> Producto:</label>
								<select type="number" classNameName="form-control">
									<option value={1}>Credito 1</option>
									<option value={2}>Credito 2</option>
									<option value={3}>3</option>
									<option value={4}>4</option>
									<option value={5}>5</option>
									<option value={6}>6</option>
								</select>
								<div className="modal-footer">
									<button type="button" className="btn btn-primary">
										Pagar
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
