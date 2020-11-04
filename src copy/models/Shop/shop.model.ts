import { model } from "mongoose"
import { IShopDocument } from "./shop.types"
import ShopSchema from "./shop.schema"

export const ShopModel = model<IShopDocument>("admin_shops", ShopSchema)

