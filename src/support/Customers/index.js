export const FetchCustomers = () => ({
    query: `query {
        fetchCustomers {
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

export const TAGS = {
  FETCH: 'fetchCustomers'
}