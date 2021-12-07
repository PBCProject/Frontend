import { useQuery } from '@apollo/client';

const GET_USER_QUERY = gql`
  {
    query GetUsers {
        getUsers {
            id
            name
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
  }
`;


const Listuser = () => {

    const { data, loading, error } = useQuery(GET_USER_QUERY);
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>List User</h4>
                        </div>  {/* end card-header */}
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Address</th>
                                            <th>Role</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { data.GetUsers.map(user => (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.address}</td>
                                                <td>{user.role}</td>
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
