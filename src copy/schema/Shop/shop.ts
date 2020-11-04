import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
    fetchAdminShops: [AdminShopDoc!]
}

extend type Mutation {
    postAdminShop(authID: String!, adminShopInput: AdminShopInput!): AdminShopDoc
    editAdminShop(authID: String!, adminShopInput: AdminShopInputEdit!): AdminShopDoc
    removeAdminShop(authID: String!, _id: String!): AdminShopDoc
}

type AdminShop {
    shopName: String
    shopCategory: String
    shopOwner: String
    createdAt: String
    updatedAt: String
}

type AdminShopDoc {
    _id: String
    shopName: String
    shopCategory: String
    shopOwner: String
    createdAt: String
    updatedAt: String
    error: Error
}

input AdminShopInput {
    shopName: String!
    shopCategory: String!
    shopOwner: String!
}

input AdminShopInputEdit {
    _id: String!
    shopName: String
    shopCategory: String
}

`