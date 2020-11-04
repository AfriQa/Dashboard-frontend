import React, { useState }from "react"
import LoginView from "./LoginView"
import {
    sendText, selectTextStatus, isAuthenticated,
    verify, selectVerifyStatus,
} from "../../../redux/States/Auth"
import { reduxStatus } from "../../../constants/reduxStatus"
import { connect } from "react-redux"

const Loader = ({
    sendStatus, verifyStatus, isAuthenticated, sendText, verify
}) => {
    const [sendLock, setSendLock] = useState(true)
    const [verifyLock, setVerifyLock] = useState(true)
    const [reqNumber, setNumber] = useState("")
    const _sendText = (phoneNumber) => {
        setSendLock(false)
        setNumber(String(phoneNumber))
        sendText(phoneNumber)
    }

    const _verify = (code) => {
        setVerifyLock(false)
        verify(reqNumber, code)
    }

    return (
        <LoginView
            isSent={sendStatus.status === reduxStatus.success && !sendLock}
            isVerified={verifyStatus.status === reduxStatus.success && !verifyLock}
            sendText={_sendText}
            verify={_verify}
            send_loading={sendStatus.loading && !sendLock}
            verify_loading={sendStatus.loading && !verifyLock}
            isAuthenticated={isAuthenticated}
        />
    )
}

const mapStateToProps = state => ({
    sendStatus: selectTextStatus(state),
    verifyStatus: selectVerifyStatus(state),
    isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = dispatch => ({
    sendText: (phoneNumber) => dispatch(sendText(phoneNumber)),
    verify: (phoneNumber, code) => dispatch(verify(phoneNumber, code))
})

export default connect(mapStateToProps, mapDispatchToProps)(Loader)