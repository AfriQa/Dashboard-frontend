export const FetchBody = () => ({
  query: `query {
      fetchAdminUsers {
        _id
        firstName
        lastName
        phoneNumber
        email
        country
        city
        shopCategory
        shopName
        createdAt
        updatedAt
        error {
          type
          message
        }
      }
    }`
})

export const TAG = "fetchAdminUsers"