import { model } from "mongoose"
import { IOrderDocument } from "./order.types"
import OrderSchema from "./order.schema"

export const OrderModel = model<IOrderDocument>("admin_orders", OrderSchema)