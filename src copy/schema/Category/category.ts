import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
    fetchAdminCategories: [AdminCategoryDoc!]
}

extend type Mutation {
    postAdminCategory(authID: String!, adminCategoryInput: AdminCategoryInput!): AdminCategoryDoc
    editAdminCategory(authID: String!, adminCategoryInput: AdminCategoryInputEdit!): AdminCategoryDoc
    removeAdminCategory(authID: String!, _id: String!): AdminCategoryDoc
}

type AdminCategory {
    name: String
    createdAt: String
    updatedAt: String
}

type AdminCategoryDoc {
    _id: String
    name: String
    createdAt: String
    updatedAt: String
    error: Error
}

input AdminCategoryInput {
    name: String!
}

input AdminCategoryInputEdit {
    _id: String!
    name: String
}

`