import { combineReducers } from "redux"
import { stateName as order, reducer as OrderReducer } from "../resolvers/Order/OrderState"
import { stateName as customer, reducer as CustomerReducer } from "../resolvers/Customer/CustomerState"
import { stateName as product, reducer as ProductResolver } from "../resolvers/Product/ProductState"

export default combineReducers({
    [order]: OrderReducer,
    [customer]: CustomerReducer,
    [product]: ProductResolver
})
