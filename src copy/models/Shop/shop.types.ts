import { Document, Model, Query } from "mongoose"

export { Query }

export interface IShop {
    shopName: string
    shopCategory: string
    shopOwner: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IShopInput {
    shopName: string
    shopCategory: string
    shopOwner: string
}

export interface IShopDoc {
    _id: string
    shopName: string
    shopCategory: string
    shopOwner: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IShopEdit {
    _id: string
    shopName?: string
    shopCategory?: string
}

export interface IShopDocument extends IShop, Document {}

export interface IShopModel extends IShop, Model<IShopDocument> {}