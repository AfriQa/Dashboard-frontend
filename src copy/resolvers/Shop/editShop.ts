import { ShopModel } from "../../models/Shop/shop.model"
import { IShopDoc, IShopEdit } from "../../models/Shop/shop.types"
import { getError } from "../../helpers/getError"

const editShop = async (shop: IShopEdit): Promise<IShopDoc> => {
    const foundShop = await ShopModel.findOne({ _id: shop._id })
    if (!foundShop) {
        return getError(400, "Shop could not be found")
    }

    return await ShopModel.updateOne({ _id: shop._id }, { ...shop, updatedAt: new Date() })
        .then(() => ({
            _id: foundShop._id,
            shopName: shop.shopName?
                shop.shopName : foundShop.shopName,
            shopCategory: shop.shopCategory?
                shop.shopCategory : foundShop.shopCategory,
            shopOwner: foundShop.shopOwner,
            createdAt: foundShop.createdAt,
            updatedAt: foundShop.updatedAt
        }))
        .catch(err => getError(500, err))
}

export default editShop