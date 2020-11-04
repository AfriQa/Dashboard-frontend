export const reduxStatus = {
    initial: "initial",
    pending: "pending",
    success: "success",
    failure: "failure"
}

export default reduxStatus

export const STATE_INI = {
    loading: false,
    status: reduxStatus.initial,
    errors: null
}

export const STATE_REQ = {
    loading: true,
    status: reduxStatus.pending,
    errors: null
}

export const STATE_OK = {
    loading: false,
    status: reduxStatus.success,
    errors: null
}

export const STATE_ERR = (errors) => ({
    loading: false,
    status: reduxStatus.failure,
    errors
})