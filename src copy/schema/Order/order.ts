import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
    fetchAdminOrders: [AdminOrderDoc!]
    fetchAdminOrderByID(_id: String!): AdminOrderDoc
}

extend type Mutation {
    postAdminOrder(authID: String!, AdminOrderInput: AdminOrderInput!): AdminOrderDoc
    editAdminOrder(authID: String!, AdminOrderInput: AdminOrderInputEdit!): AdminOrderDoc
    removeAdminOrder(authID: String!, _id: String!): AdminOrderDoc
}

type AdminOrderDoc {
    _id: String
    customer: String
    amount: Int
    items: [String]
    status: String
    createdAt: String
    updatedAt: String
    error: Error
}

input AdminOrderInput {
    customer: String!
    amount: Int!
    items: [String!]!
}

input AdminOrderInputEdit {
    _id: String!
    customer: String
    amount: Int
    items: [String]
    status: String
}

`