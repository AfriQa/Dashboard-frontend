import { Product } from "../../models/Product/product.model"
import { IProduct, IProductDoc } from "../../models/Product/product.types"
import { getError } from "../../helpers/getError"

const postProduct = async (product: IProduct): Promise<IProductDoc> => {
    return await Product.create({ ...product })
        .then(createdProduct => createdProduct)
        .catch(err => getError(500, err))
}

export default postProduct