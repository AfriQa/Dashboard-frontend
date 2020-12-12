import StateArrayModel from "../../wrappers/StateModels/StateArrayModel"
import { FetchBody, TAG } from "./Queries/Fetch"
import { unResolveEntity } from "../../helpers/resolveEntity"
import { stateName as orderStateName } from "../Order/OrderState"

const Customer = new StateArrayModel({ stateName: "new_customers" })

Customer.createSlice()
Customer.setInitialState()
Customer.createSlice()

export const {
    reducer, stateName
} = Customer.getEntity()

export const getCustomers = (state) => {
    const content = unResolveEntity(state, stateName)
    return content.data
}

export const getCustomer = (state, id) => {
    const content = unResolveEntity(state, stateName)
    const index = content.data.findIndex(customer => customer._id === id)
    if (index < 0) {
        return { name: "Not Found" }
    }
    return {
        name: content.data[index].firstName + " " + content.data[index].lastName,
        city: content.data[index].city,
        country: content.data[index].country,
        createdAt: content.data[index].createdAt,
        email: content.data[index].email,
        error: content.data[index].error,
        firstName: content.data[index].firstName,
        lastName: content.data[index].lastName,
        fullName: content.data[index].firstName + " " + content.data[index].lastName,
        phoneNumber: content.data[index].phoneNumber,
        shopCategory: content.data[index].shopCategory,
        shopName: content.data[index].shopName,
        updatedAt: content.data[index].updatedAt,
        _id: content.data[index]._id
    }
}

export const getCustomerOrders = (state, id) => {
    const content = unResolveEntity(state, stateName)
    const index = content.data.findIndex(customer => customer._id === id)
    if (index < 0) {
        return { name: "Not Found" }
    }
    const customer = content.data[index]
    const ordersData = unResolveEntity(state, orderStateName)
    return ordersData.data.filter(order => order.customer === customer._id)
}

export default reducer

export const {
    selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Customer.getSelectors()

export { selectData as selectCustomers }

export const {
    Add, Fetch, Edit, Remove
} = Customer.getAPIHandles()

export const fetchCustomers = () => {
    return Fetch(FetchBody(), TAG)
}