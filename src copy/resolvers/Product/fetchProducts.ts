import { Product } from "../../models/Product/product.model"
import { IProductDoc } from "../../models/Product/product.types"

const fetchProducts = async (): Promise<IProductDoc[]> => {
    const users = await Product.find({})
    return users
}

export default fetchProducts