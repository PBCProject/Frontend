export const Mensajes = () => {
	return (
		
		<div class="container">
		<table class="table table-hover">
		  <thead >
			<tr class="table-primary">
			  <th scope="col">Fecha</th>
			  <th scope="col">Mensaje</th>
			</tr>
		  </thead>
		  <tbody>
		  <tr class="table-dark">
			  <th scope="row">03/03/01</th>
			  <td> <textarea class="form-control" id="exampleTextarea" rows="3">Su credido fue aprobado. Por valor de: 400000</textarea></td>
			</tr>
			<tr class="table-dark">
			  <th scope="row">15/02/01</th>
			  <td> <textarea class="form-control" id="exampleTextarea" rows="3">Su credido fue aprobado. Por valor de: 400000</textarea></td>
			</tr>
			<tr class="table-dark">
			  <th scope="row">01/02/01</th>
			  <td> <textarea class="form-control" id="exampleTextarea" rows="3">Su prórroga fue aprobada. No pagara po 4 meses</textarea></td>
			</tr>
			<tr class="table-dark">
			  <th scope="row">01/01/01</th>
			  <td> <textarea class="form-control" id="exampleTextarea" rows="3">Su credido fue aprobado. Por valor de: 400000</textarea></td>
			</tr>
		  </tbody>
		</table>
		</div>	
		
		);
};