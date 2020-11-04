import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
    fetchCustomers: [CustomerDoc!]
}

extend type Mutation {
    postCustomer(authID: String!, customerInput: CustomerInput!): CustomerDoc
    editCustomer(authID: String!, customerInput: CustomerInputEdit!): CustomerDoc
    removeCustomer(authID: String!, _id: String!): CustomerDoc
}

type Customer {
    firstName: String
    lastName: String
    email: String
    location: String
    phoneNumber: String
    quantityPurchased: Int
    totalAmount: Float
    createdAt: String
    updatedAt: String
}

type CustomerDoc {
    _id: String
    firstName: String
    lastName: String
    email: String
    location: String
    phoneNumber: String
    quantityPurchased: Int
    totalAmount: Float
    createdAt: String
    updatedAt: String
    error: Error
}

input CustomerInput {
    firstName: String!
    lastName: String!
    email: String!
    location: String!
    phoneNumber: String!
    quantityPurchased: Int!
    totalAmount: Float!
}

input CustomerInputEdit {
    _id: String!
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    location: String
}

`