export const Messages = () => {
	return (
		<div className="container">
			<table className="table table-hover">
				<thead>
					<tr className="table-primary">
						<th scope="col">Fecha</th>
						<th scope="col">Mensaje</th>
					</tr>
				</thead>
				<tbody>
					<tr className="table-dark">
						<th scope="row">03/03/01</th>
						<td>
							{' '}
							<textarea className="form-control" id="exampleTextarea" rows="3">
								Su credido fue aprobado. Por valor de: 400000
							</textarea>
						</td>
					</tr>
					<tr className="table-dark">
						<th scope="row">15/02/01</th>
						<td>
							{' '}
							<textarea className="form-control" id="exampleTextarea" rows="3">
								Su credido fue aprobado. Por valor de: 400000
							</textarea>
						</td>
					</tr>
					<tr className="table-dark">
						<th scope="row">01/02/01</th>
						<td>
							{' '}
							<textarea className="form-control" id="exampleTextarea" rows="3">
								Su prórroga fue aprobada. No pagara po 4 meses
							</textarea>
						</td>
					</tr>
					<tr className="table-dark">
						<th scope="row">01/01/01</th>
						<td>
							{' '}
							<textarea className="form-control" id="exampleTextarea" rows="3">
								Su credido fue aprobado. Por valor de: 400000
							</textarea>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
