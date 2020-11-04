import reducer, {
    initialState, resolveState, selectFetchStatus, selectUsers,
    requestFetch, successFetch, failureFetch
} from "../index"
import { STATE_INI, STATE_REQ, STATE_OK, STATE_ERR } from "../../../../constants/reduxStatus"

describe('fetch users', () => {
    test('should return initial state on first run', () => {
        const nextState = initialState
        const result = reducer(undefined, {})
        expect(result).toEqual(nextState)
        expect(selectFetchStatus(resolveState(result)))
            .toEqual(STATE_INI)
    })

    test('should update state on request fetch', () => {
        const nextState = reducer(initialState, requestFetch())
        expect(selectFetchStatus(resolveState(nextState)))
            .toEqual(STATE_REQ)
    })

    test('should update state on success fetch', () => {
        const users = [
            { _id: 1, name: 'someone' }
        ]
        const nextState = reducer(initialState, successFetch(users))
        expect(selectFetchStatus(resolveState(nextState)))
            .toEqual(STATE_OK)
        expect(selectUsers(resolveState(nextState)))
            .toEqual(users)
    })

    test('should update state on failure fetch', () => {
        const errors = { name: 'Error' }
        const nextState = reducer(initialState, failureFetch(errors))
        expect(selectFetchStatus(resolveState(nextState)))
            .toEqual(STATE_ERR(errors))
    })
})