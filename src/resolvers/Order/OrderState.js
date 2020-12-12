import StateArrayModel from "../../wrappers/StateModels/StateArrayModel"
import { FetchBody, TAG as fetch_tag } from "./Queries/Fetch"
import {
    AcceptOrder,
    PickOrder,
    ArriveOrder,
    PayOrder,
    TAG as update_tag
} from "./Queries/Update"
import { unResolveEntity } from "../../helpers/resolveEntity"
import orderStatus from "../../constants/orderStatus"

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

export const isAccepted = (status) => status !== orderStatus.ORDER_CREATED

export const getOrderCountIndex = (status) => {
    const listOfStatus = [orderStatus.ORDER_ACCEPTED, orderStatus.ORDER_PICKED, orderStatus.ORDER_ARRIVED]
    return listOfStatus.findIndex(idx => idx === status)
}

export default reducer

export const {
    selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData,
    selectSocketUpdate
} = Orders.getSelectors()

export { selectData as selectOrders }

export const {
    Add, Fetch, Edit, Remove, SocketUpdate
} = Orders.getAPIHandles()

export const fetchOrders = () => {
    return Fetch(FetchBody(), fetch_tag)
}

export const acceptOrder = (id) => {
    return Edit(AcceptOrder(id), update_tag)
}

export const pickOrder = (id) => {
    return Edit(PickOrder(id), update_tag)
}

export const arriveOrder = (id) => {
    return Edit(ArriveOrder(id), update_tag)
}

export const payOrder = (id) => {
    return Edit(PayOrder(id), update_tag)
}