import React, { useState, useEffect } from "react"
import Delivery from "./DeliveryMain"
import {
  selectOrders, Fetch, Edit,
  selectFetchStatus, selectEditStatus
} from "../../resolvers/Order/OrderState"
import { connect } from "react-redux"
import reduxStatus from "../../constants/reduxStatus"
import ToastExample from "../../components/Toast/"

const Loader = ({
  fetchStatus, editStatus, orders, fetchOrders, editOrder
}) => {
  const [fetchLock, setFetchLock] = useState(true)
  const [editLock, setEditLock] = useState(true)

  useEffect(() => {
    fetchOrders()
    setFetchLock(false)
  }, [fetchOrders, setFetchLock])

  useEffect(() => {
    
  }, [fetchStatus, selectFetchStatus, fetchLock])



  return (
    <div>
      <ToastExample />
      <Delivery
        doneFetch={
          reduxStatus.success === fetchStatus.status
        }
        doneEdit={
          reduxStatus.success === editStatus.status === !editLock
        }
        orders={orders}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  fetchStatus: selectFetchStatus(state),
  editStatus: selectEditStatus(state),
  orders: selectOrders(state),
})

const mapDispatchToProps = dispatch => ({
  fetchOrders: () => dispatch(Fetch()),
  editOrder: (data) => dispatch(Edit(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Loader)