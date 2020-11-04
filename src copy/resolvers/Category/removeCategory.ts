import { CategoryModel } from "../../models/Category/category.model"
import { ICategoryDoc } from "../../models/Category/category.types"
import { getError } from "../../helpers/getError"

const removeCategory = async (_id: string): Promise<ICategoryDoc> => {
    const foundCategory = await CategoryModel.findOne({ _id })
    if (!foundCategory) {
        return getError(400, "Category could not be found")
    }

    return await CategoryModel.deleteOne({ _id })
        .then(() => foundCategory)
        .catch(err => getError(500, err))
}

export default removeCategory