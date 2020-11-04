export const getError = (type: number, message: any): any => ({
    error: {
        type, message: String(message)
    }
})