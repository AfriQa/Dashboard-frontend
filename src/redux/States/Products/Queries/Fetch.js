export const FetchBody = () => ({
    query: `{
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
          createdAt
          updatedAt
          error {
            type
            message
          }
        }
    }`
})

export const FETCH_TAG = "fetchAdminProducts"