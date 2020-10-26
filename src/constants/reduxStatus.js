const parentStatus = {
    initial: "initial",
    pending: "pending",
    success: "success",
    failure: "failure"
}

export default parentStatus

export const STATE_INI = {
    loading: false,
    status: parentStatus.initial,
    errors: null
}

export const STATE_REQ = {
    loading: true,
    status: parentStatus.pending,
    errors: null
}

export const STATE_OK = {
    loading: false,
    status: parentStatus.success,
    errors: null
}

export const STATE_ERR = (errors) => ({
    loading: false,
    status: parentStatus.failure,
    errors
})