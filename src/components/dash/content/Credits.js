import { useQuery,gql } from '@apollo/client';

const GET_CREDITS_QUERY = gql`
    {
        getCredits {
            creditResponse {
                isApproved
            }
            id
            startDate
            nextPaymentDate
            creditState {
                name
                color
            }
        }
}
`;

export const Credits = () => {
    const { data, loading, error } = useQuery(GET_CREDITS_QUERY);
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    return(
  
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Lista de Creditos</h4>
                        </div>  {/* end card-header */}
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            
                                            <th>Credito</th>
                                            <th>Estado</th>
                                            <th>Fecha</th>  
                                            <th>Proximo Pago</th>
                                                                             
                                            <th>Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.getCredits.map(credit => (
                                            <tr key={credit.id}>
                                                <td>{credit.id}</td>
                                                <td>{credit.creditResponse.isApproved ? "Aprobado" : "No aprobado" }</td>
                                                <td>{credit.startDate}</td>
                                                <td>{credit.nextPaymentDate}</td>
                                                <td>
                                                    <button className="btn btn-sm btn-primary">
                                                        <i className="fa fa-edit"></i>
                                                    </button>
                                                    <button className="btn btn-sm btn-danger">
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>  {/* end table-responsive */}
                        </div>  {/* end card-body */}
                    </div>  {/* end card */}
                </div>  {/* end col */}
            </div>  {/* end row */}
		<div class="container">
            <div class="row">
			<div class="modal-header">
				<h5 class="modal-title">Solicitar credito</h5>
				
			</div>
			<div class="modal-body">
				<form id="primero">
                        <label htmlFor=""> Valor:</label>
                        <input type="number" className="form-control"/>
                        <label htmlFor=""> Tiempo (meses):</label>
                        <select type="number" className="form-control">
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

						<div class="modal-footer">
							<button type="button" class="btn btn-primary">Solicitar</button>
							<button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
						</div>
                </form>
			</div>
			</div>
		</div>

        </div>
    );
}

