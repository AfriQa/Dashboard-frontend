import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import {
  selectFetchStatus, selectOrders, fetchOrders, selectSocketUpdate, SocketUpdate,
} from "./OrderState"
import status from "../../constants/reduxStatus"
import { useSubscription } from "@apollo/react-hooks"
import { OrderUpdated } from "./Queries/Subscribe"
import Toast from "../../components/Toast/"

const Subscription = ({ socketUpdated, update, orders }) => {
  const [ids, setIDs] = useState([])
  const { data, loading } = useSubscription(OrderUpdated, {
    variables: { ids }
  })
  const [lock, setLock] = useState(true)

  useEffect(() => {
    if (orders.length > 0) {
      setIDs(orders.map(order => order._id))
    }
  }, [orders])

  useEffect(() => {
    if (socketUpdated > 0) {
      setLock(false)
    }
  }, [socketUpdated])

  useEffect(() => {
    if (!loading && data) {
      update(data.orderUpdated)
    }
  }, [loading, data])

  return (
    <>
      <Toast
        title="Your Order has been accepted"
        content="Driver has picked it up"
        display={socketUpdated > 0}
        lock={lock}
      />
    </>
  )
}

const OrderContent = ({ fetchOrders, fetchStatus, socketUpdated, update, orders }) => {
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

  return <Subscription socketUpdated={socketUpdated} update={update} orders={orders} />
}

const mapStateToProps = state => ({
  orders: selectOrders(state),
  fetchStatus: selectFetchStatus(state),
  socketUpdated: selectSocketUpdate(state),
})

const mapDispatchToProps = dispatch => ({
  fetchOrders: () => dispatch(fetchOrders()),
  update: (data) => dispatch(SocketUpdate(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderContent)