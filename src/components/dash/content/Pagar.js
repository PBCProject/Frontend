export const Pagar = () => {
    return(
        <>
            <div class="container">
		    <div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Pagar</h5>
				
			</div>
			<div class="modal-body">
				<form id="primero">
                    <label htmlFor=""> Producto:</label>
                    <select type="number" className="form-control">
                        <option value={1}>Credito 1</option>
                        <option value={2}>Credito 2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>     
                    </select>
						<div class="modal-footer">
							<button type="button" class="btn btn-primary">Pagar</button>
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

