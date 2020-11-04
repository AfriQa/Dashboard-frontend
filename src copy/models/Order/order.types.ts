import { Document, Model, Query } from "mongoose"

export { Query }

export interface IOrder {
    customer: string
    amount: number
    items: string[]
    status?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IOrderInput {
    customer: string
    amount: number
    items: string[]
}

export interface IOrderPostResponse {
    _id: string
    customer: string
    amount: number
    items: string[]
    status: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IOrderDoc {
    _id: string
    customer: string
    amount: number
    items: string[]
    status?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IOrderEdit {
    _id: string
    customer?: string
    amount?: number
    items?: string[]
    status?: string
}

export interface IOrderDocument extends IOrder, Document {}

export interface IOrderModel extends IOrder, Model<IOrderDocument> {}