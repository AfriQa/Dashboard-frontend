import StateArrayModel from "../../wrappers/StateModels/StateArrayModel"
import { FetchBody, TAG } from "./Queries/Fetch"
import { unResolveEntity } from "../../helpers/resolveEntity"

const Orders = new StateArrayModel({ stateName: "new_orders" })

Orders.createSlice()
Orders.setInitialState()
Orders.createSlice()

export const {
    reducer, stateName
} = Orders.getEntity()

export const getContent = (state) => {
    const content = unResolveEntity(state, stateName)
    const orders = content.data.map(order => ({
        id: order._id,
        ref: "some no",
        customer: order.customer,
        items: order.items,
        date: order.createdAt,
        status: order.status
    }))

    return {
        orders
    }
}

export default reducer

export const {
    selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Orders.getSelectors()

export { selectData as selectOrders }

export const {
    Add, Fetch, Edit, Remove
} = Orders.getAPIHandles()

export const fetchOrders = () => {
    return Fetch(FetchBody(), TAG)
}