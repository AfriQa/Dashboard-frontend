import { IResolvers } from "graphql-tools"
import fetchRegisteredUsers from "./fetchRegisteredUsers"
import postRegisteredUser from "./postRegisteredUser"
import editRegisteredUser from "./editRegisteredUser"
import removeRegisteredUser from "./removeRegisteredUser"
import fetchRegisteredUserByID from "./fetchRegisteredUserByID"

const RegisteredUserResolver : IResolvers = {
    Query: {
        async fetchAdminRegisteredUsers() {
            const result = await fetchRegisteredUsers()
            return result
        },

        async fetchAdminRegisteredUserByID(_: any, prop: any) {
            const result = await fetchRegisteredUserByID(prop._id)
            return result
        }
    },

    Mutation: {
        async postAdminRegisteredUser(_: any, prop: any) {
            const result = await postRegisteredUser(prop.adminRegisteredUserInput)
            return result
        },

        async editAdminRegisteredUser(_: any, prop: any) {
            const result = await editRegisteredUser(prop.adminRegisteredUserInput)
            return result
        },

        async removeAdminRegisteredUser(_: any, prop: any) {
            const result = await removeRegisteredUser(prop._id)
            return result
        }
    }
}

export default RegisteredUserResolver