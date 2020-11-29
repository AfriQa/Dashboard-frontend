export const FetchBody = () => ({
    query: `query {
      fetchAdminOrders {
        _id
        customer
        items {
          amount
          _id
          selectedColor
          selectedSize
        }
        orderInfo {
          address {
            from
            to
          }
          totalDistance
          orderedTime
          estimatedDeliveryTime
        }
        status
        createdAt
        updatedAt
        error {
          type
          message
        }
      }
    }`
})

export const TAG = "fetchAdminOrders"