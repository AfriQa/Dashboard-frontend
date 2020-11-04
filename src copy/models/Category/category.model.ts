import { model } from "mongoose"
import { ICategoryDocument } from "./category.types"
import CategorySchema from "./category.schema"

export const CategoryModel = model<ICategoryDocument>("admin_categories", CategorySchema)

