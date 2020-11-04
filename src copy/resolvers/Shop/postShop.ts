import { ShopModel } from "../../models/Shop/shop.model"
import { IShopInput, IShopDoc } from "../../models/Shop/shop.types"

const postShop = async (shop: IShopInput): Promise<IShopDoc> => {
    return await ShopModel.create({ ...shop })
        .then(createdShop => createdShop)
        .catch(err => {
            // tslint:disable-next-line: no-console
            console.error(err)
            return {
                error: {
                    type: 500,
                    message: String(err)
                }
            } as any
        })
}

export default postShop