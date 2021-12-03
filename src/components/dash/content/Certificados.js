export const Certificados = () => {
	return (
		<div class="container">
		<div>
		<div class="">
		<table class="table table-hover">
			<thead>
			<tr>
			<td colspan="5">
				<h4>Certificado a nombre de:</h4>
				<input class="form-control" type="text" placeholder="Fulanita de tal"/>
				Con número de documento:
				<input class="form-control" type="text" placeholder="12345567" />
			</td>
			</tr>
		  </thead>
		  <tbody>
			<tr class="table-primary">
			  <th scope="col">Producto</th>
			  <th scope="col">Cuotas pagadas</th>
			  <th scope="col">Cuotas pendientes</th>
			  <th scope="col">Valor cuota</th>
			  <th scope="col">Estado</th>
			</tr>
		  
			<tr class="table-dark">
			  <th scope="row">1</th>
			  <td>2</td>
			  <td>4</td>
			  <td>50000</td>
			  <td>Pendiente</td>
			</tr>
			<tr class="table-dark">
			  <th scope="row">2</th>
			  <td>4</td>
			  <td>0</td>
			  <td>20000</td>
			  <td>Finalizado</td>
			</tr>
			<tr class="table-dark">
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
		<div class="container">
			<form class="d-flex">
			<button class="btn btn-secondary my-2 my-sm-0" type="submit">Descargar certificado</button>
			</form>
		</div>
		</div>
		);
};