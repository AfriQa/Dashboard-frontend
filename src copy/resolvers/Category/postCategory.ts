import { CategoryModel } from "../../models/Category/category.model"
import { ICategory, ICategoryDoc } from "../../models/Category/category.types"
import { getError } from "../../helpers/getError"

const postCategory = async (category: ICategory): Promise<ICategoryDoc> => {
    return await CategoryModel.create({ ...category })
        .then(createdCategory => createdCategory)
        .catch(err => getError(500, err))
}

export default postCategory