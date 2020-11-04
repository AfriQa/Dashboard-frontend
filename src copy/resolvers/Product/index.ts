import { IResolvers } from "graphql-tools"
import fetchProducts from "./fetchProducts"
import postProduct from "./postProduct"
import editProduct from "./editProduct"
import removeProduct from "./removeProduct"

const UserResolver : IResolvers = {
    Query: {
        async fetchAdminProducts() {
            const result = await fetchProducts()
            return result
        }
    },

    Mutation: {
        async postAdminProduct(_: any, prop: any) {
            const result = await postProduct(prop.adminProductInput)
            return result
        },

        async editAdminProduct(_: any, prop: any) {
            const result = await editProduct(prop.adminProductInput)
            return result
        },

        async removeAdminProduct(_: any, prop: any) {
            const result = await removeProduct(prop._id)
            return result
        }
    }
}

export default UserResolver