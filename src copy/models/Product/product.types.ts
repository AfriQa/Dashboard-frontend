import { Document, Model, Query } from "mongoose"

export { Query }

export interface IProduct {
    productName: string
    productDescription: string
    productQuantity: number
    productTags: string[]
    productPrice: number
    productDiscount: number
    productCategory: string
    productImages: string[]
    createdAt?: Date
    updatedAt?: Date
}

export interface IProductDoc {
    _id: string
    productName: string
    productDescription: string
    productQuantity: number
    productTags: string[]
    productPrice: number
    productDiscount: number
    productCategory: string
    productImages: string[]
    createdAt?: Date
    updatedAt?: Date
}

export interface IProductEdit {
    _id: string
    productName?: string
    productDescription?: string
    productQuantity?: number
    productTags?: string[]
    productPrice?: number
    productDiscount?: number
    productCategory?: string
    productImages?: string[]
}

export interface IProductDocument extends IProduct, Document {}

export interface IProductModel extends IProduct, Model<IProductDocument> {}