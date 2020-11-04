export const PostRegisteredUser = (phoneNumber) => ({
    query: `mutation (adminRegisteredUserInput: AdminRegisteredUserInput!) {
        postAdminRegisteredUser(authID: "dsvsdv", adminRegisteredUserInput: $adminRegisteredUserInput) {
            _id
            phoneNumber
            email
            isVerified
            createdAt
            updatedAt
            error {
                type
                message
            }
        }
    }`,
    variables: {
        adminRegisteredUserInput: {
            phoneNumber
        }
    }
})