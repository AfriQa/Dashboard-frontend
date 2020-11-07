export const FetchBody = (id) => ({
    query: `query ($id: String!) {
        fetchAdminUserByID(_id: $id) {
         _id
         firstName
         lastName
         phoneNumber
         email
         country
         city
         shopName
         shopCategory
         createdAt
         updatedAt
       }
    }`,
    variables: {
        id
    }
})

export const FETCH_TAG = "fetchAdminUserByID"