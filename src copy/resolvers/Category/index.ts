import { IResolvers } from "graphql-tools"
import fetchCategories from "./fetchCategories"
import postCategory from "./postCategory"
import editCategory from "./editCategory"
import removeCategory from "./removeCategory"

const CategoryResolver : IResolvers = {
    Query: {
        async fetchAdminCategories() {
            const result = await fetchCategories()
            return result
        }
    },

    Mutation: {
        async postAdminCategory(_: any, prop: any) {
            const result = await postCategory(prop.adminCategoryInput)
            return result
        },

        async editAdminCategory(_: any, prop: any) {
            const result = await editCategory(prop.adminCategoryInput)
            return result
        },

        async removeAdminCategory(_: any, prop: any) {
            const result = await removeCategory(prop._id)
            return result
        }
    }
}

export default CategoryResolver