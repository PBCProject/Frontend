import { gql } from '@apollo/client';

export const GET_USER_QUERY = gql`
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

const GET_CREDITS_QUERY = gql`
    {
        query GetCredits {
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
