import { IResolvers } from "graphql-tools"
import fetchCustomers from "./fetchCustomers"
import postCustomer from "./postCustomer"
import editCustomer from "./editCustomer"
import removeCustomer from "./removeCustomer"

const CustomerResolver : IResolvers = {
    Query: {
        async fetchCustomers() {
            const result = await fetchCustomers()
            return result
        }
    },

    Mutation: {
        async postCustomer(_: any, prop: any) {
            const result = await postCustomer(prop.customerInput)
            return result
        },

        async editCustomer(_: any, prop: any) {
            const result = await editCustomer(prop.customerInput)
            return result
        },

        async removeCustomer(_: any, prop: any) {
            const result = await removeCustomer(prop._id)
            return result
        }
    }
}

export default CustomerResolver