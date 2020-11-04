export const FetchBody = () => ({
    query: `{
        fetchCustomers {
          _id
          firstName
          lastName
          email
          location
          phoneNumber
          createdAt
          updatedAt   
        }
      }`
})

export const FETCH_TAG = 'fetchCustomers'