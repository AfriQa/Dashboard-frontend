import reducer, {
    initialState, resolveState, selectVerifyStatus,
    requestVerify, successVerify, isAuthenticated, failureVerify
} from "../index"
import { STATE_INI, STATE_REQ, STATE_OK, STATE_ERR } from "../../../../constants/reduxStatus"

describe('sendText', () => {
    test('should update state on request text sent', () => {
        const phoneNumber = "+251944701899"
        const code = "1234"
        const nextState = reducer(initialState, requestVerify(phoneNumber, code))
        expect(selectVerifyStatus(resolveState(nextState)))
            .toEqual(STATE_REQ)
    })

    test('should update state on success text sent', () => {
        var result = {
            message: "Verified",
            error: null
        }
        const phoneNumber = "+251944701899"
        var nextState = reducer(initialState, requestVerify(phoneNumber))
        nextState = reducer(nextState, successVerify(result))
        expect(selectVerifyStatus(resolveState(nextState)))
            .toEqual(STATE_OK)
        expect(isAuthenticated(resolveState(nextState)))
            .toBeTruthy()
        result = {
            message: "Invalid Code",
            error: {
                value: true,
                message: "Error Occured"
            }
        }
        nextState = reducer(nextState, successVerify(result))
        expect(selectVerifyStatus(resolveState(nextState)))
            .toEqual(STATE_OK)
        expect(isAuthenticated(resolveState(nextState)))
            .toBeFalsy()
    })

    test('should update state on request failure', () => {
        const errors = { name: 'Error' }
        const nextState = reducer(initialState, failureVerify(errors))
        expect(selectVerifyStatus(resolveState(nextState)))
            .toEqual(STATE_ERR(errors))
    })
})

