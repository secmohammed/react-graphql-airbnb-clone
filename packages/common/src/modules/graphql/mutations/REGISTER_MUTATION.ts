import { gql } from "apollo-boost";
export default gql`
    mutation Register(
        $email: String!
        $password: String!
        $lastName: String!
        $firstName: String!
    ) {
        register(
            data: {
                password: $password
                firstName: $firstName
                lastName: $lastName
                email: $email
            }
        ) {
            id
        }
    }
`;
