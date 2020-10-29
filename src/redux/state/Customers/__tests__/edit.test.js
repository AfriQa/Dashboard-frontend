import reducer, {
    initialState, resolveState, selectEditStatus, successFetch, selectCustomers,
    requestEdit, successEdit, failureEdit
} from "../index"
import { STATE_INI, STATE_REQ, STATE_OK, STATE_ERR } from "../../../../constants/reduxStatus"

describe('edit user', () => {
    test('should return initialState on first run', () => {
        const nextState = initialState
        const result = reducer(undefined, {})
        expect(result).toEqual(nextState)
        expect(selectEditStatus(resolveState(nextState)))
            .toEqual(STATE_INI)
    })

    test('should update state on request edit', () => {
        const nextState = reducer(initialState, requestEdit())
        expect(selectEditStatus(resolveState(nextState)))
            .toEqual(STATE_REQ)
    })

    test('should update state on success edit', () => {
        const data = [
            { _id: 1, name: 'someone' },
            { _id: 2, name: 'else' }
        ]
        var nextState = reducer(initialState, successFetch(data))
        nextState = reducer(nextState, successEdit({ _id: 1, name: 'Selma' }))
        expect(selectEditStatus(resolveState(nextState)))
            .toEqual(STATE_OK)
        expect(selectCustomers(resolveState(nextState)))
            .toEqual([
                { _id: 1, name: 'Selma'},
                data[1]
            ])
    })

    test('should update state on failure edit', () => {
        const errors = { name: 'Error' }
        const nextState = reducer(initialState, failureEdit(errors))
        expect(selectEditStatus(resolveState(nextState)))
            .toEqual(STATE_ERR(errors))
    })
})