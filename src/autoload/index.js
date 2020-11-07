import { fetchProductCategories } from "../redux/States/ProductCategories"
import { fetchUserInfo } from "../redux/States/UserInfo"
import { fetchProducts } from "../redux/States/Products"

export default () => dispatch => {
    dispatch(fetchProductCategories())
    dispatch(fetchUserInfo("5f972dfce8b9d31895eeb0bc"))
    dispatch(fetchProducts())
}