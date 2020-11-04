export const AddBody = (customer) => ({
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

export const ADD_TAG = "postCustomer"