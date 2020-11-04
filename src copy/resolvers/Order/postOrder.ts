import { OrderModel } from "../../models/Order/order.model"
import { IOrderInput, IOrderDoc } from "../../models/Order/order.types"

const postOrder = async (order: IOrderInput): Promise<IOrderDoc> => {
    return await OrderModel.create({ ...order })
        .then(createdOrder => createdOrder)
        .catch(err => {
            // tslint:disable-next-line: no-console
            console.error(err)
            return {
                error: {
                    type: 500,
                    message: String(err)
                }
            } as any
        })
}

export default postOrder