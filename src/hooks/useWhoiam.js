import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

const WHOIAM = gql`
	query {
		whoiam {
			name
			id
			email
			role {
				id
				name
			}
		}
	}
`;

export const useWhoiam = () => {
	const { dispatch } = useContext(AuthContext);
	const [whoiamQuery] = useLazyQuery(WHOIAM);
	return async client => {
		if (client) {
			const { data } = await client.query({ query: WHOIAM });
			dispatch({
				type: 'LOGIN',
				payload: {
					user: data.whoiam,
				},
			});
		} else {
			whoiamQuery().then(({ data }) => {
				dispatch({
					type: 'LOGIN',
					payload: {
						user: data.whoiam,
					},
				});
			});
		}
	};
};
