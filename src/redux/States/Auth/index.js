import { createSlice } from "@reduxjs/toolkit"
import { STATE_INI, STATE_REQ, STATE_OK, STATE_ERR } from "../../../constants/reduxStatus"
import { apiCallBegan } from "../../api"
import { SendText, Verify, TAGS } from "../../../support/Queries/Auth"

export const stateName = "auth"
export const initialState = {
    isAuthenticated: false,
    statusText: "",
    sendTextStatus: STATE_INI,
    verifyStatus: STATE_INI
}

const AuthSlice = createSlice({
    initialState,
    name: stateName,
    reducers: {
        requestSendText(state, _) {
            state.sendTextStatus = STATE_REQ
        },
        successSendText(state, action) {
            state.sendTextStatus = STATE_OK
            const payload = action.payload
            if (!payload.error) {
                state.statusText = payload.message
            } else {
                state.statusText = payload.error.message
            }
        },
        failureSendText(state, action) {
            state.sendTextStatus = STATE_ERR(action.payload)
        },

        requestVerify(state, _) {
            state.verifyStatus = STATE_REQ
        },
        successVerify(state, action) {
            state.verifyStatus = STATE_OK
            const payload = action.payload
            if (!payload.error) {
                state.isAuthenticated = true
                state.statusText = payload.message
            } else {
                state.isAuthenticated = false
                state.statusText = payload.error.message
            }
        },
        failureVerify(state, action) {
            state.verifyStatus = STATE_ERR(action.payload)
        },

        logout(state, _) {
            state.isAuthenticated = false
        }
    }
})

export const {
    requestSendText, successSendText, failureSendText,
    requestVerify, successVerify, failureVerify, logout
} = AuthSlice.actions

export default AuthSlice.reducer

export const resolveState = state => ({
    entities: { [stateName]: state }
})

export const selectTextStatus = state => {
    const { sendTextStatus } = unResolveState(state)
    return sendTextStatus
}

export const selectVerifyStatus = state => {
    const { verifyStatus } = unResolveState(state)
    return verifyStatus
}

export const isAuthenticated = state => {
    const { isAuthenticated } = unResolveState(state)
    return isAuthenticated
}

export const unResolveState = state => state.entities[stateName]

export const sendText = phoneNumber =>
    apiCallBegan({
        body: SendText(phoneNumber),
        tag: TAGS.sendText,
        onStart: requestSendText.type,
        onSuccess: successSendText.type,
        onFailure: failureSendText.type
    })

export const verify = (phoneNumber, code) =>
    apiCallBegan({
        body: Verify(phoneNumber, code),
        tag: TAGS.verify,
        onStart: requestVerify.type,
        onSuccess: successVerify.type,
        onFailure: failureVerify.type
    })