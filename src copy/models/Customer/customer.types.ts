import { Document, Model, Query } from "mongoose"

export { Query }

export interface ICustomer {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    location: string
    quantityPurchased: number
    totalAmount: number
    createdAt?: Date
    updatedAt?: Date
}

export interface ICustomerDoc {
    _id: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    location: string
    quantityPurchased: number
    totalAmount: number
    createdAt?: Date
    updatedAt?: Date
}

export interface ICustomerEdit {
    _id: string
    firstName?: string
    lastName?: string
    email?: string
    phoneNumber?: string
    location?: string
}

export interface ICustomerDocument extends ICustomer, Document {}

export interface ICustomerModel extends ICustomer, Model<ICustomerDocument> {}