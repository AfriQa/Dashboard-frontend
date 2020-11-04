import { ShopModel } from "../../models/Shop/shop.model"
import { IShopDoc } from "../../models/Shop/shop.types"
import { getError } from "../../helpers/getError"

const removeUser = async (_id: string): Promise<IShopDoc> => {
    const foundShop = await ShopModel.findOne({ _id })
    if (!foundShop) {
        return getError(400, "Shop could not be found")
    }

    return await ShopModel.deleteOne({ _id })
        .then(() => foundShop)
        .catch(err => getError(500, err))
}

export default removeUser