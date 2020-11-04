import { ShopModel } from "../../models/Shop/shop.model"
import { IShopDoc } from "../../models/Shop/shop.types"

const fetchShops = async (): Promise<IShopDoc[]> => {
    const shops = await ShopModel.find({})
    return shops
}

export default fetchShops