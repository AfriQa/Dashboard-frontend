const statuses = [
    "Created", "Payed", "Shipped", "Delivered"
]

export const checkStatus = (status: string) => {
    const index = statuses.findIndex(item => item === status)
    return index >= 0
}

export default statuses