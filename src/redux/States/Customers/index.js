import StateArrayModel from "../../../wrappers/StateModels/StateArrayModel"
import { FetchBody, FETCH_TAG } from "./Queries/Fetch"
import { AddBody, ADD_TAG } from "./Queries/Add"

const Customers = new StateArrayModel({ stateName: "customers" })

Customers.setInitialState()
Customers.createSlice()

export const {
    reducer, stateName
} = Customers.getEntity()

export default reducer

export const {
    selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Customers.getSelectors()

export { selectData as selectCustomers }

export const {
    Add, Fetch, Edit, Remove
} = Customers.getAPIHandles()

export const fetchCustomers = () => {
    return Fetch(FetchBody(), FETCH_TAG)
}

export const addCustomer = (customer) => {
    return Add(AddBody(customer), ADD_TAG)
}