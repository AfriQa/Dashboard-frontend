import { model } from "mongoose"
import { ICustomerDocument } from "./customer.types"
import CustomerSchema from "./customer.schema"

export const CustomerModel = model<ICustomerDocument>("customers", CustomerSchema)

