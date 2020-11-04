import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
    fetchAdminUsers: [AdminUserDoc!]
}

extend type Mutation {
    postAdminUser(authID: String!, adminUserInput: AdminUserInput!): AdminUserDoc
    editAdminUser(authID: String!, adminUserInput: AdminUserInputEdit!): AdminUserDoc
    removeAdminUser(authID: String!, _id: String!): AdminUserDoc
}

type AdminUser {
    firstName: String
    lastName: String
    phoneNumber: String
    email: String
    country: String
    city: String
    shopName: String
    shopCategory: String
    createdAt: String
    updatedAt: String
}

type AdminUserDoc {
    _id: String
    firstName: String
    lastName: String
    phoneNumber: String
    email: String
    country: String
    city: String
    shopName: String
    shopCategory: String
    createdAt: String
    updatedAt: String
    error: Error
}

input AdminUserInput {
    firstName: String!
    lastName: String!
    phoneNumber: String!
    email: String
    country: String
    city: String
    shopName: String!
    shopCategory: String!
}

input AdminUserInputEdit {
    _id: String!
    firstName: String
    lastName: String
    phoneNumber: String
    email: String
    country: String
    city: String
    shopName: String
    shopCategory: String
}

`