import React from "react";
import Deliver from "./Deliver";
import Page from "../../components/Page";
import Deliverylists from "./Deliverylists";
import { Container } from "@material-ui/core";
import { selectOrders, acceptOrder, isAccepted, pickOrder, arriveOrder, payOrder } from "../../resolvers/Order/OrderState"
import { selectProducts, getProductStrings, getTotalProductPrices } from "../../resolvers/Product/ProductState"
import { getCustomer } from "../../resolvers/Customer/CustomerState"
import { connect } from "react-redux"

const Loader = ({
  orders, getCustomer, getTotalProductPrices, getProductStrings,
  acceptOrder, pickOrder, arriveOrder, payOrder
}) => {
  return (
    <div>
      <Page className="indexRoot" title="Deliver">
        <Container>
          <Deliver />
          {orders.map(order => {
            return <Deliverylists
              order={order}
              itemString={getProductStrings(order.items)}
              totalPrice={getTotalProductPrices(order.items)}
              customer={getCustomer(order.customer)}
              acceptOrder={() => acceptOrder(order._id)}
              pickOrder={() => pickOrder(order._id)}
              arriveOrder={() => arriveOrder(order._id)}
              payOrder={() => payOrder(order._id)}
              isAccepted={isAccepted(order.status)}
              // isAccepted={false}
            />
          })}
        </Container>
      </Page>
    </div>
  );
}

const mapStateToProps = state => ({
  getTotalProductPrices: (items) => getTotalProductPrices(state, items),
  getProductStrings: (items) => getProductStrings(state, items),
  getCustomer: (customerID) => getCustomer(state, customerID),
  orders: selectOrders(state),
  products: selectProducts(state)
})

const mapDispatchToProps = dispatch => ({
  acceptOrder: (id) => dispatch(acceptOrder(id)),
  pickOrder: (id) => dispatch(pickOrder(id)),
  arriveOrder: (id) => dispatch(arriveOrder(id)),
  payOrder: (id) => dispatch(payOrder(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Loader)