import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
    fetchAdminProducts: [AdminProductDoc!]
}

extend type Mutation {
    postAdminProduct(authID: String!, adminProductInput: AdminProductInput!): AdminProductDoc
    editAdminProduct(authID: String!, adminProductInput: AdminProductInputEdit!): AdminProductDoc
    removeAdminProduct(authID: String!, _id: String!): AdminProductDoc
}

type AdminProduct {
    productName: String
    productDescription: String
    productQuantity: Float
    productTags: [String]
    productPrice: Float
    productDiscount: Float
    productCategory: String
    productImages: [String]
    createdAt: String
    updatedAt: String
}

type AdminProductDoc {
    _id: String
    productName: String
    productDescription: String
    productQuantity: Int
    productTags: [String]
    productPrice: Float
    productDiscount: Float
    productCategory: String
    productImages: [String]
    createdAt: String
    updatedAt: String
    error: Error
}

input AdminProductInput {
    productName: String!
    productDescription: String!
    productQuantity: Int!
    productTags: [String!]!
    productPrice: Float!
    productDiscount: Float
    productCategory: String!
    productImages: [String!]!
}

input AdminProductInputEdit {
    _id: String!
    productName: String
    productDescription: String
    productQuantity: Int
    productTags: [String!]
    productPrice: Float
    productDiscount: Float
    productCategory: String
    productImages: [String!]
}

`