import { createSlice } from "@reduxjs/toolkit"
import { STATE_INI, STATE_REQ, STATE_OK, STATE_ERR } from "../../../constants/reduxStatus"
import { resolveEntity, unResolveEntity } from "../../../helpers/resolveEntity"
import { apiCallBegan } from "../../../redux/api"

export default class StateArrayModel {
    constructor({
        stateName, initialState, state
    }) {
        this.config = {
            stateName: stateName ? stateName : "template",
            initialState: initialState ? initialState : this.config.initialState
        }

        this.requestOptions = {
            body: {},
            tag: "",
            onStart: "",
            onSuccess: "",
            onFailure: ""
        }

        this.data = {
            state: state ? state : {}
        }
    }

    status = {
        addStatus: STATE_INI,
        fetchStatus: STATE_INI,
        editStatus: STATE_INI,
        deleteStatus: STATE_INI,
        socketUpdateCount: 0
    }

    core = {
        slice: {}
    }

    data = {
        state: {}
    }

    config = {
        stateName: "",
        initialState: {
            data: []
        }
    }

    APIActions = {
        fetch: this.requestOptions,
        add: this.requestOptions,
        edit: this.requestOptions,
        remove: this.requestOptions,
        socketUpdate: this.requestOptions,
    }

    selectors = []

    getData = () => {
        return unResolveEntity(this.data.state, this.config.stateName)
    }

    getConfig = () => {
        return this.config
    }

    setConfig = (config) => {
        this.config = config
    }

    getState = () => {
        return this.data.state
    }

    setState = (state = this.config.initialState) => {
        this.data.state = state
    }

    getInitialState = () => {
        return this.config.initialState
    }

    setInitialState = (initialState = this.config.initialState) => {
        this.config.initialState = initialState
    }

    getReducer = () => {
        return this.core.slice.reducer
    }

    createSlice = () => {
        this.core.slice = createSlice({
            initialState: {
                ...this.config.initialState,
                ...this.status
            },
            reducers: {
                requestFetch(state, _) {
                    state.fetchStatus = STATE_REQ
                },
                successFetch(state, action) {
                    state.fetchStatus = STATE_OK
                    state.data = action.payload
                },
                failureFetch(state, action) {
                    state.fetchStatus = STATE_ERR(action.payload)
                },

                requestAdd(state, _) {
                    state.addStatus = STATE_REQ
                },
                successAdd(state, action) {
                    state.addStatus = STATE_OK
                    state.data.push(action.payload)
                },
                failureAdd(state, action) {
                    state.addStatus = STATE_ERR(action.payload)
                },

                requestEdit(state, _) {
                    state.editStatus = STATE_REQ
                },

                successEdit(state, action) {
                    state.editStatus = STATE_OK
                    const index = state.data.findIndex(element => element.id === action.payload.id)
                    if (index >= 0) {
                        state.data[index] = {
                            ...state.data[index],
                            ...action.payload
                        }
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
                    state.data = state.data.filter(element => element.id !== action.payload.id)
                },
                failureDelete(state, action) {
                    state.deleteStatus = STATE_ERR(action.payload)
                },
                socketUpdate(state, action) {
                    state.socketUpdateCount = state.socketUpdateCount + 1
                    const index = state.data.findIndex(item => item._id === action.payload._id)
                    if (index >= 0) {
                        state.data[index] = {
                            ...state.data[index],
                            ...action.payload
                        }
                    }
                }
            },
            name: this.config.stateName
        })
    }

    getSlice = () => {
        return this.core.slice
    }

    getStatus = () => {
        return this.status
    }

    setStatus = (status = this.status) => {
        this.status = status
    }

    getSelectors = () => {
        return {
            selectAddStatus: this.selectAddStatus,
            selectFetchStatus: this.selectFetchStatus,
            selectEditStatus: this.selectEditStatus,
            selectDeleteStatus: this.selectDeleteStatus,
            selectData: this.selectData,
            selectSocketUpdate: this.selectSocketUpdate,
        }
    }

    selectAddStatus = (state) => {
        const { addStatus } = unResolveEntity(state, this.config.stateName)
        return addStatus
    }
    selectFetchStatus = (state) => {
        const { fetchStatus } = unResolveEntity(state, this.config.stateName)
        return fetchStatus
    }
    selectEditStatus = (state) => {
        const { editStatus } = unResolveEntity(state, this.config.stateName)
        return editStatus
    }
    selectDeleteStatus = (state) => {
        const { deleteStatus } = unResolveEntity(state, this.config.stateName)
        return deleteStatus
    }

    selectData = (state) => {
        const { data } = unResolveEntity(state, this.config.stateName)
        return data
    }

    selectSocketUpdate = (state) => {
        const { socketUpdateCount } = unResolveEntity(state, this.config.stateName)
        return socketUpdateCount
    }

    // Actions
    getActions = () => {
        var actions = {
            requestFetch: (state, action) => null, successFetch: (state, action) => null, failureFetch: (state, action) => null,
            requestAdd: (state, action) => null, successAdd: (state, action) => null, failureAdd: (state, action) => null,
            requestEdit: (state, action) => null, successEdit: (state, action) => null, failureEdit: (state, action) => null,
            requestDelete: (state, action) => null, successDelete: (state, action) => null, failureDelete: (state, action) => null,
            socketUpdate: (state, action) => null,
        }
        const {
            requestFetch, successFetch, failureFetch,
            requestAdd, successAdd, failureAdd,
            requestEdit, successEdit, failureEdit,
            requestDelete, successDelete, failureDelete,
            socketUpdate
        } = this.core.slice.actions
        actions.requestFetch = requestFetch
        actions.successFetch = successFetch
        actions.failureFetch = failureFetch
        actions.requestAdd = requestAdd
        actions.successAdd = successAdd
        actions.failureAdd = failureAdd
        actions.requestEdit = requestEdit
        actions.successEdit = successEdit
        actions.failureEdit = failureEdit
        actions.requestDelete = requestDelete
        actions.successDelete = successDelete
        actions.failureDelete = failureDelete
        actions.socketUpdate = socketUpdate
        return actions
    }

    resolveState = (state) => {
        return resolveEntity(state, this.config.stateName)
    }

    unResolveState = (state) => {
        return unResolveEntity(state, this.config.stateName)
    }

    getEntity = () => {
        return {
            stateName: this.config.stateName,
            reducer: this.getReducer()
        }
    }

    setAdd = ({ body, tag }) => {
        const { requestAdd, successAdd, failureAdd } = this.getActions()
        this.requestOptions = {
            ...this.requestOptions,
            onStart: requestAdd.type,
            onSuccess: successAdd.type,
            onFailure: failureAdd.type,
        }
        if (body) {
            this.requestOptions.body = body
        }

        if (tag) {
            this.requestOptions.tag = tag
        }

        this.APIActions.add = this.requestOptions
    }

    setFetch = ({ body, tag }) => {
        const { requestFetch, successFetch, failureFetch } = this.getActions()
        this.requestOptions = {
            ...this.requestOptions,
            onStart: requestFetch.type,
            onSuccess: successFetch.type,
            onFailure: failureFetch.type,
        }
        if (body) {
            this.requestOptions.body = body
        }

        if (tag) {
            this.requestOptions.tag = tag
        }

        this.APIActions.fetch = this.requestOptions
    }

    setEdit = ({ body, tag }) => {
        const { requestEdit, successEdit, failureEdit } = this.getActions()
        this.requestOptions = {
            ...this.requestOptions,
            onStart: requestEdit.type,
            onSuccess: successEdit.type,
            onFailure: failureEdit.type,
        }
        if (body) {
            this.requestOptions.body = body
        }

        if (tag) {
            this.requestOptions.tag = tag
        }

        this.APIActions.edit = this.requestOptions
    }

    setRemove = ({ body, tag }) => {
        const { requestDelete, successDelete, failureDelete } = this.getActions()
        this.requestOptions = {
            ...this.requestOptions,
            onStart: requestDelete.type,
            onSuccess: successDelete.type,
            onFailure: failureDelete.type,
        }

        if (body) {
            this.requestOptions.body = body
        }

        if (tag) {
            this.requestOptions.tag = tag
        }

        this.APIActions.remove = this.requestOptions
    }

    setSocketUpdate = () => {
        const { socketUpdate } = this.getActions()
        this.requestOptions = {
            ...this.requestOptions,
            socketUpdate: socketUpdate.type
        }

        this.APIActions.socketUpdate = this.requestOptions
    }

    getAPIHandles = () => {
        return {
            Add: (body, tag) => {
                const { requestAdd, successAdd, failureAdd } = this.getActions()
                this.requestOptions = {
                    ...this.requestOptions,
                    onStart: requestAdd.type,
                    onSuccess: successAdd.type,
                    onFailure: failureAdd.type,
                    onSocketUpdate: null,
                    socketUpdate: null
                }
                if (body) {
                    this.requestOptions.body = body
                }

                if (tag) {
                    this.requestOptions.tag = tag
                }

                this.setAdd({ ...this.requestOptions })
                return this.Add()
            },
            Fetch: (body, tag) => {
                const { requestFetch, successFetch, failureFetch } = this.getActions()
                this.requestOptions = {
                    ...this.requestOptions,
                    onStart: requestFetch.type,
                    onSuccess: successFetch.type,
                    onFailure: failureFetch.type,
                    onSocketUpdate: null,
                    socketUpdate: null
                }

                if (body) {
                    this.requestOptions.body = body
                }

                if (tag) {
                    this.requestOptions.tag = tag
                }

                this.setFetch({ ...this.requestOptions })
                return this.Fetch()
            },
            Edit: (body, tag) => {
                const { requestEdit, successEdit, failureEdit } = this.getActions()
                this.requestOptions = {
                    ...this.requestOptions,
                    onStart: requestEdit.type,
                    onSuccess: successEdit.type,
                    onFailure: failureEdit.type,
                    onSocketUpdate: null,
                    socketUpdate: null
                }
                if (body) {
                    this.requestOptions.body = body
                }

                if (tag) {
                    this.requestOptions.tag = tag
                }
                this.setEdit({ ...this.requestOptions })
                return this.Edit()
            },

            Remove: (body, tag) => {
                const { requestDelete, successDelete, failureDelete } = this.getActions()
                this.requestOptions = {
                    ...this.requestOptions,
                    onStart: requestDelete.type,
                    onSuccess: successDelete.type,
                    onFailure: failureDelete.type,
                    onSocketUpdate: null,
                    socketUpdate: null
                }
                if (body) {
                    this.requestOptions.body = body
                }

                if (tag) {
                    this.requestOptions.tag = tag
                }
                this.setRemove({ ...this.requestOptions })
                return this.Remove()
            },
            SocketUpdate: (data) => {
                const { socketUpdate } = this.getActions()
                this.requestOptions = {
                    onStart: null,
                    onSuccess: null,
                    onFailure: null,
                    onSocketUpdate: socketUpdate.type,
                    payload: data
                }
                this.setSocketUpdate(this.requestOptions)
                return this.SocketUpdate(this.requestOptions)
            }
        }
    }

    Add = () => apiCallBegan(this.APIActions.add)
    Fetch = () => apiCallBegan(this.APIActions.fetch)
    Edit = () => apiCallBegan(this.APIActions.edit)
    Remove = () => apiCallBegan(this.APIActions.remove)
    SocketUpdate = (options) => apiCallBegan(options)
}