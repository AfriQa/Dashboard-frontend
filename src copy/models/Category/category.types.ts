import { Document, Model, Query } from "mongoose"

export { Query }

export interface ICategory {
    name: string
    createdAt?: Date
    updatedAt?: Date
}

export interface ICategoryDoc {
    _id: string
    name: string
    createdAt?: Date
    updatedAt?: Date
}

export interface ICategoryEdit {
    _id: string
    name?: string
}

export interface ICategoryDocument extends ICategory, Document {}

export interface ICategoryModel extends ICategory, Model<ICategoryDocument> {}