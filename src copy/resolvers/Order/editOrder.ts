import { OrderModel } from "../../models/Order/order.model"
import { IOrderDoc, IOrderEdit } from "../../models/Order/order.types"
import { getError } from "../../helpers/getError"
import { checkStatus } from "../../helpers/orderStatuses"

const editRegisteredUser = async (order: IOrderEdit): Promise<IOrderDoc> => {
    const foundRegisteredUser = await OrderModel.findOne({ _id: order._id })
    if (!foundRegisteredUser) {
        return getError(400, "User could not be found")
    }

    if (!checkStatus(order.status as any)) {
        return getError(400, "Invalid status")
    }

    return await OrderModel.updateOne({ _id: order._id }, { ...order, updatedAt: new Date() })
        .then(() => ({
            _id: foundRegisteredUser._id,
            customer: order.customer?
                order.customer : foundRegisteredUser.customer,
            amount: order.amount?
                order.amount : foundRegisteredUser.amount,
            items: order.items?
                order.items : foundRegisteredUser.items,
            status: order.status?
                order.status : foundRegisteredUser.status,
            createdAt: foundRegisteredUser.createdAt,
            updatedAt: foundRegisteredUser.updatedAt
        }))
        .catch(err => getError(500, err))
}

export default editRegisteredUser