import StateArrayModel from "../../wrappers/StateModels/StateArrayModel"
import { FetchBody, TAG } from "./Queries/Fetch"
import { unResolveEntity } from "../../helpers/resolveEntity"

const Product = new StateArrayModel({ stateName: "new_product" })

Product.createSlice()
Product.setInitialState()
Product.createSlice()

export const {
    reducer, stateName
} = Product.getEntity()

export const getProduct = (state, id) => {
    const content = unResolveEntity(state, stateName)
    const index = content.data.findIndex(customer => customer._id === id)
    if (index < 0) {
        return { name: "Not Found" }
    }
    return content.data[index]
}

export const getProductStrings = (state, items) => {
    let totalProductStrings = ""
    const ids = items.map(item => item._id)
    const content = unResolveEntity(state, stateName)
    ids.forEach(id => {
        const index = content.data.findIndex(customer => customer._id === id)
        if (index >= 0) {
            totalProductStrings += content.data[index].productName + ", "
        }
    })
    return totalProductStrings.slice(0, totalProductStrings.length - 2)
}

export default reducer

export const {
    selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Product.getSelectors()

export { selectData as selectProducts }

export const {
    Add, Fetch, Edit, Remove
} = Product.getAPIHandles()

export const fetchProducts = () => {
    return Fetch(FetchBody(), TAG)
}