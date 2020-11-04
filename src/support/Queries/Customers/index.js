export const FetchCustomers = () => ({
    query: `{
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

/*

{
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@gmail.com",
        location: "AA",
        phoneNumber: "+25191212414"
      }) {
        _id
        firstName
      }
    }
*/

export const AddCustomer = (customer) => ({
  query: `mutation($customer: CustomerInput!) {
      postCustomer(authID: "ascasc", customerInput: $customer) {
        _id
        firstName
        lastName
        email
        location
        phoneNumber
        totalAmount
        quantityPurchased
        createdAt
      }
  }`,

  variables: {
    "customer": customer
  }
})

export const TAGS = {
  FETCH: 'fetchCustomers',
  ADD: 'postCustomer'
}