import reducer, {
    initialState, resolveState, selectTextStatus,
    requestSendText, successSendText, isAuthenticated, failureSendText
} from "../index"
import { STATE_INI, STATE_REQ, STATE_OK, STATE_ERR } from "../../../../constants/reduxStatus"

describe('sendText', () => {
    test('should update state on request text sent', () => {
        const phoneNumber = "+251944701899"
        const nextState = reducer(initialState, requestSendText(phoneNumber))
        expect(selectTextStatus(resolveState(nextState)))
            .toEqual(STATE_REQ)
    })

    test('should update state on success text sent', () => {
        var result = {
            message: "Verified",
            error: null
        }
        const phoneNumber = "+251944701899"
        var nextState = reducer(initialState, requestSendText(phoneNumber))
        nextState = reducer(nextState, successSendText(result))
        expect(selectTextStatus(resolveState(nextState)))
            .toEqual(STATE_OK)
        expect(isAuthenticated(resolveState(nextState)))
            .toBeFalsy()
        result = {
            message: "Invalid Code",
            error: {
                value: true,
                message: "Error Occured"
            }
        }
        nextState = reducer(nextState, successSendText(result))
        expect(selectTextStatus(resolveState(nextState)))
            .toEqual(STATE_OK)
        expect(isAuthenticated(resolveState(nextState)))
            .toBeFalsy()
    })

    test('should update state on request failure', () => {
        const errors = { name: 'Error' }
        const nextState = reducer(initialState, failureSendText(errors))
        expect(selectTextStatus(resolveState(nextState)))
            .toEqual(STATE_ERR(errors))
    })
})

