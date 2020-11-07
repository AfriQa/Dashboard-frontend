import { combineReducers } from "redux"
import AuthReducer, { stateName as auth } from "./States/Auth"
import OrderReducer, { stateName as order } from "./States/Orders"
import CustomerReducer, { stateName as customers } from "./States/Customers"
import ProductReducer, { stateName as products } from "./States/Products"
import ProductCategoryReducer, { stateName as productCategory } from "./States/ProductCategories"
import UserInfoReducer, { stateName as userInfo } from "./States/UserInfo"
export default combineReducers({
    [customers]: CustomerReducer,
    [auth]: AuthReducer,
    [order]: OrderReducer,
    [products]: ProductReducer,
    [productCategory]: ProductCategoryReducer,
    [userInfo]: UserInfoReducer
})
