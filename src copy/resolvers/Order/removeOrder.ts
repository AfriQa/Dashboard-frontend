import { OrderModel } from "../../models/Order/order.model"
import { IOrderDoc } from "../../models/Order/order.types"
import { getError } from "../../helpers/getError"

const removeOrder = async (_id: string): Promise<IOrderDoc> => {
    const foundOrder = await OrderModel.findOne({ _id })
    if (!foundOrder) {
        return getError(400, "Order User could not be found")
    }

    return await OrderModel.deleteOne({ _id })
        .then(() => foundOrder)
        .catch(err => getError(500, err))
}

export default removeOrder