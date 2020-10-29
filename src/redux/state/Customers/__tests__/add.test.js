import reducer, {
    initialState, resolveState, selectAddStatus, selectCustomers,
    requestAdd, successAdd, failureAdd
} from "../index"
import { STATE_INI, STATE_REQ, STATE_OK, STATE_ERR } from "../../../../constants/reduxStatus"

describe('Add User', () => {
    test('should return initialState state on from run', () => {
        const nextState = initialState
        const result = reducer(undefined, {})
        expect(result).toEqual(nextState)
        expect(selectAddStatus(resolveState(nextState)))
            .toEqual(STATE_INI)
    })

    test('should update state on request add', () => {
        const nextState = reducer(initialState, requestAdd())
        expect(selectAddStatus(resolveState(nextState)))
            .toEqual(STATE_REQ)
    })

    test('should update state on success add', () => {
        const data = { _id: 'sdvsv', name: 'someone' }
        const nextState = reducer(initialState, successAdd(data))
        expect(selectAddStatus(resolveState(nextState)))
            .toEqual(STATE_OK)
        expect(selectCustomers(resolveState(nextState)))
            .toContain(data)
    })

    test('should update state on failure add', () => {
        const errors = { name: 'Error' }
        const nextState = reducer(initialState, failureAdd(errors))
        expect(selectAddStatus(resolveState(nextState)))
            .toEqual(STATE_ERR(errors))
    })
})