export const Request = () => {
	return (
		<>
			<div className="container">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Solicitar crédito</h5>
						</div>
						<div className="modal-body">
							<form id="primero">
								<label htmlFor=""> Valor:</label>
								<input type="number" classNameName="form-control" />
								<label htmlFor=""> Tiempo (meses):</label>
								<select type="number" classNameName="form-control">
									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
									<option value={4}>4</option>
									<option value={5}>5</option>
									<option value={6}>6</option>
									<option value={7}>7</option>
									<option value={8}>8</option>
									<option value={9}>9</option>
									<option value={10}>10</option>
									<option value={11}>11</option>
									<option value={12}>12</option>
								</select>

								<div className="modal-footer">
									<button type="button" className="btn btn-primary">
										Solicitar
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
