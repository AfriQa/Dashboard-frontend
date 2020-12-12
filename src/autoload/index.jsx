import { fetchOrders } from "../resolvers/Order/OrderState"
import { fetchProducts } from "../resolvers/Product/ProductState"

export default () => dispatch => {
    dispatch(fetchOrders())
    dispatch(fetchProducts())
}