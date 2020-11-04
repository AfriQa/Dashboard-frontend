import { IResolvers } from "graphql-tools"
import fetchShops from "./fetchShops"
import postShop from "./postShop"
import editShop from "./editShop"
import removeShop from "./removeShop"

const ShopResolver : IResolvers = {
    Query: {
        async fetchAdminShops() {
            const result = await fetchShops()
            return result
        }
    },

    Mutation: {
        async postAdminShop(_: any, prop: any) {
            const result = await postShop(prop.adminShopInput)
            return result
        },

        async editAdminShop(_: any, prop: any) {
            const result = await editShop(prop.adminShopInput)
            return result
        },

        async removeAdminShop(_: any, prop: any) {
            const result = await removeShop(prop._id)
            return result
        }
    }
}

export default ShopResolver