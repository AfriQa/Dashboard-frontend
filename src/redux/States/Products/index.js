import StateArrayModel from "../../../wrappers/StateModels/StateArrayModel"
import { FetchBody, FETCH_TAG } from "./Queries/Fetch"

const Products = new StateArrayModel({ stateName: "products" })

Products.setInitialState()
Products.createSlice()

export const {
    reducer, stateName
} = Products.getEntity()

export default reducer

export const {
    selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Products.getSelectors()

export { selectData as selectProducts }

export const {
    Add, Fetch, Edit, Remove
} = Products.getAPIHandles()

export const fetchProducts = () => {
    return Fetch(FetchBody(), FETCH_TAG)
}