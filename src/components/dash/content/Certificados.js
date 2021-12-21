export const Certificates = () => {
	return (
		<div className="container">
			<div>
				<div className="">
					<table className="table table-hover">
						<thead>
							<tr>
								<td colspan="5">
									<h4>Certificado a nombre de:</h4>
									<input className="form-control" type="text" placeholder="Fulanita de tal" />
									Con número de documento:
									<input className="form-control" type="text" placeholder="12345567" />
								</td>
							</tr>
						</thead>
						<tbody>
							<tr className="table-primary">
								<th scope="col">Producto</th>
								<th scope="col">Cuotas pagadas</th>
								<th scope="col">Cuotas pendientes</th>
								<th scope="col">Valor cuota</th>
								<th scope="col">Estado</th>
							</tr>

							<tr className="table-dark">
								<th scope="row">1</th>
								<td>2</td>
								<td>4</td>
								<td>50000</td>
								<td>Pendiente</td>
							</tr>
							<tr className="table-dark">
								<th scope="row">2</th>
								<td>4</td>
								<td>0</td>
								<td>20000</td>
								<td>Finalizado</td>
							</tr>
							<tr className="table-dark">
								<th scope="row">3</th>
								<td>2</td>
								<td>4</td>
								<td>50000</td>
								<td>Pendiente</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="container">
				<form className="d-flex">
					<button className="btn btn-secondary my-2 my-sm-0" type="submit">
						Descargar certificado
					</button>
				</form>
			</div>
		</div>
	);
};
