import reducer, {
    initialState, resolveState, selectDeleteStatus, successFetch, selectUsers,
    requestDelete, successDelete, failureDelete
} from "../index"
import { STATE_INI, STATE_REQ, STATE_OK, STATE_ERR } from "../../../../constants/reduxStatus"

describe('remove user', () => {
    test('should return initialState on first run', () => {
        const nextState = initialState
        const result = reducer(undefined, {})
        expect(result).toEqual(nextState)
        expect(selectDeleteStatus(resolveState(nextState)))
            .toEqual(STATE_INI)
    })

    test('should update state on request delete', () => {
        const nextState = reducer(initialState, requestDelete())
        expect(selectDeleteStatus(resolveState(nextState)))
            .toEqual(STATE_REQ)
    })

    test('should update state on success delete', () => {
        const data = [{ _id: 1, name: 'Selma' }, { _id: 2, name: 'Homer' }]
        var nextState = reducer(initialState, successFetch(data))
        nextState = reducer(nextState, successDelete(data[0]))
        expect(selectDeleteStatus(resolveState(nextState)))
            .toEqual(STATE_OK)
        expect(selectUsers(resolveState(nextState)))
            .toEqual([data[1]])
    })

    test('should update state on failure delete', () => {
        const errors = { name: 'Error' }
        const nextState = reducer(initialState, failureDelete(errors))
        expect(selectDeleteStatus(resolveState(nextState)))
            .toEqual(STATE_ERR(errors))
    })
})