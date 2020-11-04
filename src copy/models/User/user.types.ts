import { Document, Model, Query } from "mongoose"

export { Query }

export interface IUser {
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    country: string
    shopID: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IUserInput {
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    country: string
    shopName: string
    shopCategory: string
}

export interface IUserDoc {
    _id: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    country: string
    shopID: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IUserEdit {
    _id: string
    firstName?: string
    lastName?: string
    phoneNumber?: string
    email?: string
    country?: string
    shopID?: string
}

export interface IUserDocument extends IUser, Document {}

export interface IUserModel extends IUser, Model<IUserDocument> {}