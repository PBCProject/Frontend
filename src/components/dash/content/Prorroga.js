export const Prorroga = () => {
	return (
        <>
            <div class="container">
		    <div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Solicitar prórroga</h5>
				
			</div>
			<div class="modal-body">
				<form id="primero">
                    <label htmlFor=""> Motivo:</label>
                    <input type="textarea" height="auto" className="form-control"/>
                    <div>
                    <label htmlFor=""> Cuotas:</label>
                    <select type="number" className="form-control">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>     
                    </select>
                    </div>
                    <div>
                    <p>   </p>
                    <button type="button" class="btn btn-primary">Calcular</button>
                    </div>
						<div class="modal-footer">
							<button type="button" class="btn btn-primary">Solicitar</button>
							<button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
						</div>
                </form>
			</div>
			</div>
		</div>
		</div>
        </>
    );
};
