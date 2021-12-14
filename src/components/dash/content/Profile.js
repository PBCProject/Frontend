import { ShowInfo } from '../ui/User/ShowInfo';
import { useQuery, gql } from '@apollo/client';
import './Profile.css';

const GET_USR_QUERY = gql`
	query ($getUserId: ID!) {
		getUser(id: $getUserId) {
			id
			name
			role {
				name
				id
			}
			clientInfo {
				identification
				birthDate
				revenueValue
				expensesValue
			}
			email
			createdAt
			updatedAt
		}
	}
`;

export const Profile = () => {
	const getUserId = '61aed4f293fe4795f5d4b3db';
	const a = useQuery(GET_USR_QUERY, {
		variables: { getUserId: getUserId },
	});
	const { data, loading, error } = a;
	console.log(a);
	console.log(data);
	console.log(error);
	if (loading) return 'Loading...';
	if (error) return <pre>{error.message}</pre>;
	return (
		<div className="page-content page-container" id="page-content">
			<div className="padding">
				<div className="row container d-flex justify-content-center">
					<div className="col-xl-6 col-md-12">
						<div className="card user-card-full">
							<div className="row m-l-0 m-r-0">
								<div className="col-sm-4 bg-c-lite-green user-profile">
									<div className="card-block text-center text-white">
										<div className="m-b-25">
											{' '}
											<img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />{' '}
										</div>
										<h6 className="f-w-600">NOMBRE</h6>
										<p>TIPO_DE_USUARIO</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
									</div>
								</div>

								<div className="col-sm-8">
									<div className="card-block">
										<h6 className="m-b-20 p-b-5 b-b-default f-w-600">Información de usuario</h6>
										<div className="row">
											<div className="col-sm-6">
												<p className="m-b-10 f-w-600">Nombre</p>
												<h6 className="text-muted f-w-400">{data.getUser.name}</h6>
											</div>
											<div className="col-sm-6">
												<p className="m-b-10 f-w-600">Email</p>
												<h6 className="text-muted f-w-400">{data.getUser.email}</h6>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-6">
												<p className="m-b-10 f-w-600">Fecha de nacimiento</p>
												<h6 className="text-muted f-w-400">{data.getUser.clientInfo.birthDate}</h6>
											</div>
											<div className="col-sm-6">
												<p className="m-b-10 f-w-600">Identificación</p>
												<h6 className="text-muted f-w-400">{data.getUser.clientInfo.identification}</h6>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-6">
												<p className="m-b-10 f-w-600">Rol</p>
												<h6 className="text-muted f-w-400">{data.getUser.role.name}</h6>
											</div>
											<div className="col-sm-6">
												<p className="m-b-10 f-w-600">Fecha de creación</p>
												<h6 className="text-muted f-w-400">{data.getUser.createdAt}</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
