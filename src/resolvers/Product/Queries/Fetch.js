export const FetchBody = () => ({
  query: `query {
        fetchAdminProducts {
          _id
          productName
          productDescription
          productQuantity
          productTags
          productPrice
          productDiscount
          productCategory
          productImages
          salesCount
          createdAt
          updatedAt
          error {
            type
            message
          }
        }
    }`
})

export const TAG = "fetchAdminProducts"