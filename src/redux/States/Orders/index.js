import StateArrayModel from "../../../wrappers/StateModels/StateArrayModel"
import { FetchBody, FETCH_TAG } from "./Queries/Fetch"

const Order = new StateArrayModel({ stateName: "orders" })

Order.setInitialState()
Order.createSlice()

export const {
    reducer,
    stateName
} = Order.getEntity()

export const {
    selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Order.getSelectors()

export { selectData as selectOrders }

export default reducer

export const {
    Add, Edit, Fetch, Remove
} = Order.getAPIHandles()

export const fetchOrders = () => {
    return Fetch(FetchBody(), FETCH_TAG)
}