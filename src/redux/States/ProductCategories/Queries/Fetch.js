export const FetchBody = () => ({
    query: `{
      fetchAdminCategories {
        _id
        name
        createdAt
        updatedAt
        error {
          type
          message
        }
      }
    }`
})

export const FETCH_TAG = "fetchAdminCategories"