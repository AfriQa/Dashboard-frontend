import { model } from "mongoose"
import { IProductDocument } from "./product.types"
import ProductSchema from "./product.schema"

export const Product = model<IProductDocument>("admin_products", ProductSchema)

