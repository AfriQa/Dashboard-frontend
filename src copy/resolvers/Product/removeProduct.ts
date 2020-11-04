import { Product } from "../../models/Product/product.model"
import { IProductDoc } from "../../models/Product/product.types"
import { getError } from "../../helpers/getError"

const removeProduct = async (_id: string): Promise<IProductDoc> => {
    const foundProduct = await Product.findOne({ _id })
    if (!foundProduct) {
        return getError(400, "Product could not be found")
    }

    return await Product.deleteOne({ _id })
        .then(() => foundProduct)
        .catch(err => getError(500, err))
}

export default removeProduct