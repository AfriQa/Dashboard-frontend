import { OrderModel } from "../../models/Order/order.model"
import { IOrderDoc } from "../../models/Order/order.types"

const fetchOrders = async (): Promise<IOrderDoc[]> => {
    const registeredUsers = await OrderModel.find({})
    return registeredUsers
}

export default fetchOrders