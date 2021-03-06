import { useQuery, gql } from '@apollo/client';

const GET_USER_QUERY = gql`
  {
        getUsers {
            id
            name
            email
            role {
                id
                name
            }
            clientInfo {
                identification
                birthDate
                revenueValue
                expensesValue
            }
        }
    
  }
`;

export const Accounts = () => {
    const { data, loading, error } = useQuery(GET_USER_QUERY);
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Lista de Usuarios</h4>
                        </div>  {/* end card-header */}
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            
                                            <th>Nombre</th>
                                            <th>Rol</th>
                                            <th>Email</th>  
                                            <th>Identificación</th>
                                                                             
                                            <th>Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { data.getUsers.map(user => (
                                            <tr key={user.id}>
                                                
                                                <td>{user.name}</td>
                                                <td>{user.role.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.clientInfo === null ? "" :  user.clientInfo.identification  }</td>
                                                
                                                <td>
                                                    <button className="btn btn-sm btn-warning">Edit</button>
                                                    <button className="btn btn-sm btn-danger">Delete</button>
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
        </div> 
    );
}

