import { gql } from "apollo-server-express"

export default gql`
    type Error {
        type: Int
        message: String
    }

    type Query {
        _: String!
    }

    type Mutation {
        _: String!
    }
`