export const History = () => {
	return (
		<div className="container">
			<h3>Historial de pagos</h3>
			<div>
				<div className="container">
					<form className="d-flex">
						<select className="form-select" id="exampleSelect1">
							<option>1</option>
							<option>2</option>
							<option>3</option>
						</select>
						<button className="btn btn-secondary my-2 my-sm-0" type="submit">
							Buscar
						</button>
					</form>
				</div>
				<div className="">
					<table className="table table-hover">
						<thead>
							<tr>
								<th scope="col">Fecha</th>
								<th scope="col">Valor cuota</th>
								<th scope="col">Número de cuota</th>
								<th scope="col">Producto</th>
							</tr>
						</thead>
						<tbody>
							<tr className="table-dark">
								<th scope="row">01/01/01</th>
								<td>50000</td>
								<td>1/6</td>
								<td>1</td>
							</tr>
							<tr className="table-dark">
								<th scope="row">02/01/01</th>
								<td>60000</td>
								<td>1/6</td>
								<td>2</td>
							</tr>
							<tr className="table-dark">
								<th scope="row">01/02/01</th>
								<td>50000</td>
								<td>2/6</td>
								<td>1</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
