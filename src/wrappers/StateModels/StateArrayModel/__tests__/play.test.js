import Model from ".."
import { STATE_REQ, STATE_OK, STATE_ERR } from "../../../../constants/reduxStatus"

const stateConfig = {
    stateName: "new one",
    initialState: {
        data: []
    }
}

describe('should play', () => {
    test('should return variable', () => {
        const NewModel = new Model(stateConfig)
        expect(NewModel.getConfig())
            .toEqual(stateConfig)
    })

    test('should update state', () => {
        const NewModel = new Model({
            stateName: stateConfig.stateName
        })

        const initialState = {
            data: []
        }

        NewModel.setInitialState(initialState)
        NewModel.setState()
        NewModel.createSlice()
        expect(NewModel.getState())
            .toEqual(initialState)
    })

    test('should update state on request add', () => {
        const NewModel = new Model({ stateName: "new_one" })
        const initialState = {
            data: []
        }
        NewModel.setInitialState(initialState)
        NewModel.setState()
        NewModel.createSlice()
        expect(NewModel.getSlice()).not.toEqual({})
        const { requestAdd } = NewModel.getActions()
        expect(requestAdd.type).not.toEqual("")
        const reducer = NewModel.getReducer()
        
        const nextState = reducer(undefined, requestAdd())
        expect(NewModel.selectAddStatus(NewModel.resolveState(nextState)))
            .toEqual(STATE_REQ)
    })

    test('should update state on success add', () => {
        const NewModel = new Model({ stateName: "new_one" })
        NewModel.setInitialState()
        NewModel.createSlice()
        const { successAdd } = NewModel.getActions()
        const reducer = NewModel.getReducer()
        
        const response = { id: 1, name: 'Something' }
        const nextState = reducer(undefined, successAdd(response))
        expect(NewModel.selectAddStatus(NewModel.resolveState(nextState)))
            .toEqual(STATE_OK)
        expect(NewModel.selectData(NewModel.resolveState(nextState)))
            .toEqual([response])
    })

    test('should update state on failure add', () => {
        const NewModel = new Model({ stateName: "new_one" })
        NewModel.setInitialState()
        NewModel.createSlice()
        const errors = { name: 'Error' }
        const { failureAdd } = NewModel.getActions()
        const reducer = NewModel.getReducer()
        
        const nextState = reducer(undefined, failureAdd(errors))
        expect(NewModel.selectAddStatus(NewModel.resolveState(nextState)))
            .toEqual(STATE_ERR(errors))
    })

    test('should return entities', () => {
        const NewModel = new Model({ stateName: "new_one" })
        NewModel.setInitialState()
        NewModel.createSlice()
        expect(NewModel.getEntity()).toEqual({
            stateName: "new_one",
            reducer: NewModel.getReducer()
        })
    })

    test('should make an api call', () => {
        const NewModel = new Model({ stateName: "new_one" })
        NewModel.setInitialState()
        NewModel.createSlice()
        const options = {
            body: { one: 1 },
            tag: 'fetch'
        }
        NewModel.setFetch({ body: options.body, tag: options.tag })
        const { requestFetch, successFetch, failureFetch } = NewModel.getActions()
        expect(NewModel.Fetch())
            .toEqual({
                body: options.body,
                tag: options.tag,
                onStart: requestFetch.type,
                onSuccess: successFetch.type,
                onFailure: failureFetch.type
            })
        const addOptions = {
            body: { added: true },
            tag: 'add'
        }
        NewModel.setAdd({ body: addOptions.body, tag: addOptions.tag })
        const { requestAdd, successAdd, failureAdd} = NewModel.getActions()
        expect(NewModel.Add())
            .toEqual({
                body: addOptions.body,
                tag: addOptions.tag,
                onStart: requestAdd.type,
                onSuccess: successAdd.type,
                onFailure: failureAdd.type
            })

        const editOptions = {
            body: { added: true },
            tag: 'add'
        }
        NewModel.setEdit({ body: editOptions.body, tag: editOptions.tag })
        const { requestEdit, successEdit, failureEdit } = NewModel.getActions()
        expect(NewModel.Edit())
            .toEqual({
                body: editOptions.body,
                tag: editOptions.tag,
                onStart: requestEdit.type,
                onSuccess: successEdit.type,
                onFailure: failureEdit.type
            })

        const removeOptions = {
            body: { added: true },
            tag: 'add'
        }
        NewModel.setRemove({ body: removeOptions.body, tag: removeOptions.tag })
        const { requestDelete, successDelete, failureDelete } = NewModel.getActions()
        expect(NewModel.Remove())
            .toEqual({
                body: removeOptions.body,
                tag: removeOptions.tag,
                onStart: requestDelete.type,
                onSuccess: successDelete.type,
                onFailure: failureDelete.type
            })
    })
})