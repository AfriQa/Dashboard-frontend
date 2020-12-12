import { gql } from "apollo-boost"

export const OrderUpdated = gql`
  subscription ($ids: [String!]) {
    orderUpdated(ids: $ids) {
      _id
      status
      orderInfo {
        address {
          from
          to
        }
        totalDistance
        orderedTime
        deliveryPerson
        estimatedDeliveryTime
      }
    }
  }
`

export const TAG = "orderUpdated"