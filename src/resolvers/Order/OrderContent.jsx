import React, { useState, useEffect }from "react"
import { connect } from "react-redux"
import {
    selectFetchStatus, selectOrders, fetchOrders
} from "./OrderState"
import status from "../../constants/reduxStatus"

const OrderContent = ({ fetchOrders, fetchStatus, orders }) => {
    const [fetchLock, setFetchLock] = useState(false)

    useEffect(() => {
        fetchOrders()
        setFetchLock(false)
    }, [setFetchLock, fetchOrders])

    useEffect(() => {
        if (fetchStatus.status === status.success && !fetchLock) {
            setFetchLock(true)
        }
    }, [setFetchLock, fetchStatus])

    return <></>
}

const mapStateToProps = state => ({
    orders: selectOrders(state),
    fetchStatus: selectFetchStatus(state)
})

const mapDispatchToProps = dispatch => ({
    fetchOrders: () => dispatch(fetchOrders())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderContent)