import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
    fetchAdminRegisteredUsers: [AdminRegisteredUserDoc!]
    fetchAdminRegisteredUserByID(_id: String!): AdminRegisteredUserDoc
}

extend type Mutation {
    postAdminRegisteredUser(authID: String!, adminRegisteredUserInput: AdminRegisteredUserInput!): AdminRegisteredUserDoc
    editAdminRegisteredUser(authID: String!, adminRegisteredUserInput: AdminRegisteredUserInputEdit!): AdminRegisteredUserDoc
    removeAdminRegisteredUser(authID: String!, _id: String!): AdminRegisteredUserDoc
}

type AdminRegisteredUserDoc {
    _id: String
    phoneNumber: String
    email: String
    isVerified: Boolean
    createdAt: String
    updatedAt: String
    error: Error
}

input AdminRegisteredUserInput {
    phoneNumber: String
    email: String
}

input AdminRegisteredUserInputEdit {
    _id: String!
    phoneNumber: String
    email: String
    isVerified: Boolean
}

`