import { createSlice } from "@reduxjs/toolkit"
import { STATE_INI, STATE_REQ, STATE_OK, STATE_ERR } from "../../../constants/reduxStatus"
import { resolveEntity, unResolveEntity } from "../../helpers/resolveEntity"

export const stateName = "user_information"
export const initialState = {
    users: [],
    fetchStatus: STATE_INI,
    addStatus: STATE_INI,
    editStatus: STATE_INI,
    deleteStatus: STATE_INI
}

const UserSlice = createSlice({
    name: stateName,
    initialState,
    reducers: {
        requestFetch(state, _) {
            state.fetchStatus = STATE_REQ
        },
        successFetch(state, action) {
            state.fetchStatus = STATE_OK
            state.users = action.payload
        },
        failureFetch(state, action) {
            state.fetchStatus = STATE_ERR(action.payload)
        },

        requestAdd(state, _) {
            state.addStatus = STATE_REQ
        },
        successAdd(state, action) {
            state.addStatus = STATE_OK
            state.users.push(action.payload)
        },
        failureAdd(state, action) {
            state.addStatus = STATE_ERR(action.payload)
        },

        requestEdit(state, _) {
            state.editStatus = STATE_REQ
        },

        successEdit(state, action) {
            state.editStatus = STATE_OK
            const index = state.users.findIndex(element => element._id === action.payload._id)
            if (index >= 0) {
                state.users[index] = action.payload
            }
        },
        failureEdit(state, action) {
            state.editStatus = STATE_ERR(action.payload)
        },

        requestDelete(state, _) {
            state.deleteStatus = STATE_REQ
        },
        successDelete(state, action) {
            state.deleteStatus = STATE_OK
            state.users = state.users.filter(element => element._id !== action.payload._id)
        },
        failureDelete(state, action) {
            state.deleteStatus = STATE_ERR(action.payload)
        }
    }
})

export default UserSlice.reducer
export const {
    requestFetch, successFetch, failureFetch,
    requestAdd, successAdd, failureAdd,
    requestEdit, successEdit, failureEdit,
    requestDelete, successDelete, failureDelete
} = UserSlice.actions

export const resolveState = state => resolveEntity(state, stateName)
export const unResolveState = state => unResolveEntity(state, stateName)

export const selectFetchStatus = state => {
    const { fetchStatus } = unResolveState(state)
    return fetchStatus
}

export const selectAddStatus = state => {
    const { addStatus } = unResolveState(state)
    return addStatus
}

export const selectEditStatus = state => {
    const { editStatus } = unResolveState(state)
    return editStatus
}

export const selectDeleteStatus = state => {
    const { deleteStatus } = unResolveState(state)
    return deleteStatus
}

export const selectUsers = state => {
    const { users } = unResolveState(state)
    return users
}