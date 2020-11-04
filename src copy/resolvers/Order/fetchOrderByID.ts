import { OrderModel } from "../../models/Order/order.model"
import { IOrderDoc } from "../../models/Order/order.types"
import { getError } from "../../helpers/getError"

const fetchOrder = async (_id: string): Promise<IOrderDoc> => {
    const foundOrder = await OrderModel.findOne({ _id })
    if (!foundOrder) {
        return getError(400, "Order could not be found")
    }
    return foundOrder
}

export default fetchOrder