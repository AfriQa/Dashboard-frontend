export const EditBody = (adminUserInput) => ({
    query: `
        mutation($authID: String!, $adminUserInput: AdminUserInputEdit!) {
            editAdminUser(authID: $authID, adminUserInput: $adminUserInput) {
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
        }
    `,
    variables: {
        adminUserInput: {
            _id: "5f972dfce8b9d31895eeb0bc",
            ...adminUserInput,
        },
        authID: "ascasc"
    }
})

export const EDIT_TAG = "editAdminUser"