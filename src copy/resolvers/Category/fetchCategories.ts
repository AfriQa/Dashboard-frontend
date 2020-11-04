import { CategoryModel } from "../../models/Category/category.model"
import { ICategoryDoc } from "../../models/Category/category.types"

const fetchCategories = async (): Promise<ICategoryDoc[]> => {
    const categories = await CategoryModel.find({})
    return categories
}

export default fetchCategories