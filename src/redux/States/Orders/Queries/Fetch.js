export const FetchBody = () => ({
    query: `{
        fetchAdminOrders {
            _id
            customer
            amount
            items
            status
            createdAt
            updatedAt
            error {
            type
            message
            }
        }
    }`
})

export const FETCH_TAG = "fetchAdminOrders"