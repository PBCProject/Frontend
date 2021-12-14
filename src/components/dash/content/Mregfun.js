export const Mregfun = () =>{
    return(
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Registrar funcionario
            </button>

            <div class="container">
		    <div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Registro funcionario</h5>
				
			</div>
			<div class="modal-body">
				<form id="primero">
                    <label htmlFor=""> Nombre completo:</label>
                    <input type="text" className="form-control"/>
                    <label htmlFor=""> Usuario:</label>
                    <input type="text" className="form-control"/>
                    <label htmlFor=""> Contraseña:</label>
                    <input type="password" className="form-control"/>
                   
						<div class="modal-footer">
							<button type="button" class="btn btn-primary">Registrar</button>
							<button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
						</div>
                </form>
			</div>
			</div>
		</div>
		</div>
        </>
    );
}