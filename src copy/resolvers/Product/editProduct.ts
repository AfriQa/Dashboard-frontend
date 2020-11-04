import { Product } from "../../models/Product/product.model"
import { IProductDoc, IProductEdit } from "../../models/Product/product.types"
import { getError } from "../../helpers/getError"

const editProduct = async (product: IProductEdit): Promise<IProductDoc> => {
    const foundProduct = await Product.findOne({ _id: product._id })
    if (!foundProduct) {
        return getError(400, "Product could not be found")
    }

    return await Product.updateOne({ _id: product._id }, { ...product, updatedAt: new Date() })
        .then(() => ({
            _id: foundProduct._id,
            productName: product.productName?
                product.productName : foundProduct.productName,
            productDescription: product.productDescription?
                product.productDescription : foundProduct.productDescription,
            productQuantity: product.productQuantity?
                product.productQuantity : foundProduct.productQuantity,
            productTags: product.productTags?
                product.productTags : foundProduct.productTags,
            productPrice: product.productPrice?
                product.productPrice : foundProduct.productPrice,
            productDiscount: product.productDiscount?
                product.productDiscount : foundProduct.productDiscount,
            productCategory: product.productCategory?
                product.productCategory : foundProduct.productCategory,
            productImages: product.productImages?
                product.productImages : foundProduct.productImages,
            createdAt: foundProduct.createdAt,
            updatedAt: foundProduct.updatedAt
        }))
        .catch(err => getError(500, err))
}

export default editProduct