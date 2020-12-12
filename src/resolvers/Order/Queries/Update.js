import orderStatus from "../../../constants/orderStatus"

export const TAG = "updateOrderStatus"

export const AcceptOrder = (id) => ({
    query: `mutation ($AdminOrderUpdate: AdminOrderUpdateInput) {
        updateOrderStatus(authID: "sdvsdv", AdminOrderUpdate: $AdminOrderUpdate) {
          _id
          status
          orderInfo {
            address {
              from
              to
            }
            totalDistance
            orderedTime
            estimatedDeliveryTime
            deliveryPerson
          }
        }
      }`,
      variables: {
        AdminOrderUpdate: {
            _id: id,
            status: orderStatus.ORDER_ACCEPTED,
            detail: {
              address: {
                from: "sdvsdv",
                to: "sdvsdv"
              },
              totalDistance: 100,
              deliveryPerson: "THE DUDE"
            }
        }
      }
})

export const PickOrder = (id) => ({
  query: `mutation ($AdminOrderUpdate: AdminOrderUpdateInput) {
      updateOrderStatus(authID: "sdvsdv", AdminOrderUpdate: $AdminOrderUpdate) {
        _id
        status
        orderInfo {
          address {
            from
            to
          }
          totalDistance
          orderedTime
          estimatedDeliveryTime
          deliveryPerson
        }
      }
    }`,
    variables: {
      AdminOrderUpdate: {
          _id: id,
          status: orderStatus.ORDER_PICKED,
          detail: {
            address: {
              from: "sdvsdv",
              to: "sdvsdv"
            },
            totalDistance: 100,
            deliveryPerson: "THE DUDE"
          }
      }
    }
})

export const ArriveOrder = (id) => ({
  query: `mutation ($AdminOrderUpdate: AdminOrderUpdateInput) {
      updateOrderStatus(authID: "sdvsdv", AdminOrderUpdate: $AdminOrderUpdate) {
        _id
        status
        orderInfo {
          address {
            from
            to
          }
          totalDistance
          orderedTime
          estimatedDeliveryTime
          deliveryPerson
        }
      }
    }`,
    variables: {
      AdminOrderUpdate: {
          _id: id,
          status: orderStatus.ORDER_ARRIVED,
          detail: {
            address: {
              from: "sdvsdv",
              to: "sdvsdv"
            },
            totalDistance: 100,
            deliveryPerson: "THE DUDE"
          }
      }
    }
})

export const PayOrder = (id) => ({
  query: `mutation ($AdminOrderUpdate: AdminOrderUpdateInput) {
      updateOrderStatus(authID: "sdvsdv", AdminOrderUpdate: $AdminOrderUpdate) {
        _id
        status
        orderInfo {
          address {
            from
            to
          }
          totalDistance
          orderedTime
          estimatedDeliveryTime
          deliveryPerson
        }
      }
    }`,
    variables: {
      AdminOrderUpdate: {
          _id: id,
          status: orderStatus.ORDER_PAYED,
          detail: {
            address: {
              from: "sdvsdv",
              to: "sdvsdv"
            },
            totalDistance: 100,
            deliveryPerson: "THE DUDE"
          }
      }
    }
})