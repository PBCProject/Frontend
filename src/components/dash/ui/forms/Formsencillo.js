import { SelectItem } from './SelectItem.js';


export const Formsencillo = ({ title, titlebox, titlesel, SelectOpt=[] }) => {
	return (
        <>
            <div class="container">
		    <div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">{title}</h5>
				
			</div>
			<div class="modal-body">
				<form id="primero">
                    <label htmlFor=""> {titlebox}:</label>
                    <input type="textarea" height="auto" className="form-control"/>
                    <div>
                    <label htmlFor=""> {titlesel} :</label>
                    <select type="number" className="form-control">
                    {SelectOpt.map((item, index) => (
						<SelectItem key={index} {...item} />
					))}
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