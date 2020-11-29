import React, { useState, useEffect }from "react"
import { connect } from "react-redux"
import {
    selectFetchStatus, selectCustomers, fetchCustomers
} from "./CustomerState"
import status from "../../constants/reduxStatus"

const CustomerContent = ({ fetchCustomers, fetchStatus, customers }) => {
    const [fetchLock, setFetchLock] = useState(false)

    useEffect(() => {
        fetchCustomers()
        setFetchLock(false)
    }, [setFetchLock, fetchCustomers])

    useEffect(() => {
        if (fetchStatus.status === status.success && !fetchLock) {
            setFetchLock(true)
        }
    }, [setFetchLock, fetchStatus])

    return <></>
}

const mapStateToProps = state => ({
    customers: selectCustomers(state),
    fetchStatus: selectFetchStatus(state)
})

const mapDispatchToProps = dispatch => ({
    fetchCustomers: () => dispatch(fetchCustomers())
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerContent)