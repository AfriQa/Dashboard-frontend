import { Document, Model, Query } from "mongoose"

export { Query }

export interface IRegisteredUser {
    phoneNumber: string
    email: string
    isVerified?: boolean
    createdAt?: Date
    updatedAt?: Date
}

export interface IRegisteredUserInput {
    phoneNumber: string
    email: string
}

export interface IRegisteredUserDoc {
    _id: string
    phoneNumber: string
    email: string
    isVerified?: boolean
    createdAt?: Date
    updatedAt?: Date
}

export interface IRegisteredUserEdit {
    _id: string
    isVerified?: boolean
    phoneNumber?: string
    email?: string
}

export interface IRegisteredUserDocument extends IRegisteredUser, Document {}

export interface IRegisteredUserModel extends IRegisteredUser, Model<IRegisteredUserDocument> {}