import { IResolvers } from "graphql-tools"
import fetchOrders from "./fetchOrders"
import postOrder from "./postOrder"
import editOrder from "./editOrder"
import removeOrder from "./removeOrder"
import fetchOrderByID from "./fetchOrderByID"

const RegisteredUserResolver : IResolvers = {
    Query: {
        async fetchAdminOrders() {
            const result = await fetchOrders()
            return result
        },

        async fetchAdminOrderByID(_: any, prop: any) {
            const result = await fetchOrderByID(prop._id)
            return result
        }
    },

    Mutation: {
        async postAdminOrder(_: any, prop: any) {
            const result = await postOrder(prop.AdminOrderInput)
            return result
        },

        async editAdminOrder(_: any, prop: any) {
            const result = await editOrder(prop.AdminOrderInput)
            return result
        },

        async removeAdminOrder(_: any, prop: any) {
            const result = await removeOrder(prop._id)
            return result
        }
    }
}

export default RegisteredUserResolver