import StateArrayModel from "../../../wrappers/StateModels/StateArrayModel"
import { FetchBody, FETCH_TAG } from "./Queries/Fetch"

const ProductCategories = new StateArrayModel({ stateName: "product_categories" })

ProductCategories.setInitialState()
ProductCategories.createSlice()

export const {
    reducer, stateName
} = ProductCategories.getEntity()

export default reducer

export const {
    selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = ProductCategories.getSelectors()

export { selectData as selectProductCategories }

export const {
    Add, Fetch, Edit, Remove
} = ProductCategories.getAPIHandles()

export const fetchProductCategories = () => {
    return Fetch(FetchBody(), FETCH_TAG)
}