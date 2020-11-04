import { CategoryModel } from "../../models/Category/category.model"
import { ICategoryDoc, ICategoryEdit } from "../../models/Category/category.types"
import { getError } from "../../helpers/getError"

const editCategory = async (category: ICategoryEdit): Promise<ICategoryDoc> => {
    const foundUser = await CategoryModel.findOne({ _id: category._id })
    if (!foundUser) {
        return getError(400, "Category could not be found")
    }

    return await CategoryModel.updateOne({ _id: category._id }, { ...category, updatedAt: new Date() })
        .then(() => ({
            _id: foundUser._id,
            name: category.name?
                category.name : foundUser.name,
            createdAt: foundUser.createdAt,
            updatedAt: foundUser.updatedAt
        }))
        .catch(err => getError(500, err))
}

export default editCategory