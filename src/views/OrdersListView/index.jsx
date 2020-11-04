import React, { useState, useEffect }from 'react'
import Orders from "./OrderListView"
import {
  fetchOrders, selectOrders, selectFetchStatus, selectAddStatus
} from "../../redux/States/Orders"
import {
  fetchCustomers, selectFetchStatus as selectCustomerFetchStatus, selectCustomers
} from "../../redux/States/Customers"
import { connect } from "react-redux"
import { reduxStatus } from "../../constants/reduxStatus"

const Loader = ({
  fetchStatus, addStatus, fetchOrders, orders,
  customers, fetchCustomerStatus, fetchCustomers
}) => {
  const [fetchLock, setFetchLock] = useState(true)
  const [addLock, setAddLock] = useState(true)
  const [fetchCustomerLock, setFetchCustomerLock] = useState(true)

  useEffect(() => {
    setFetchLock(false)
    fetchOrders()
  }, [fetchOrders, setFetchLock])

  useEffect(() => {
    setFetchCustomerLock(false)
    fetchCustomers()
  }, [fetchCustomers, setFetchCustomerLock])

  useEffect(() => {
    const { status } = fetchCustomerStatus
    if (status === reduxStatus.failure && !fetchCustomerLock) {
      console.error("Failed fetching customers")
    }

    setFetchCustomerLock(true)
  }, [fetchCustomerStatus, setFetchCustomerLock, fetchCustomerLock])

  useEffect(() => {
    const { status } = fetchStatus
    if (status === reduxStatus.failure && !fetchLock) {
      console.error("Failed fetching orders")
    }

    setFetchLock(true)
  }, [fetchStatus, setFetchLock, fetchLock])

  useEffect(() => {
    const { status } = addStatus
    if (status === reduxStatus.failure && !addLock) {
      console.error("Failed adding customer")
    }
  }, [addStatus, setAddLock, addLock])

  const _addOrder = (data) => {
    setAddLock(false)
    // addCustomer({
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   email: data.email,
    //   location: data.location,
    //   phoneNumber: data.phoneNumber,
    //   totalAmount: Number(data.totalAmount),
    //   quantityPurchased: Number(data.quantity_purchased)
    // })
  }

  return (
    <Orders
      orders={orders}
      addOrder={_addOrder}
      doneAdd={addStatus.status === reduxStatus.success && !addLock}
      customers={customers}
    />
  )
}

const mapStateToProps = state => ({
  orders: selectOrders(state),
  fetchStatus: selectFetchStatus(state),
  addStatus: selectAddStatus(state),
  customers: selectCustomers(state),
  fetchCustomerStatus: selectCustomerFetchStatus(state)
})

const mapDispatchToProps = dispatch => ({
  fetchOrders: () => dispatch(fetchOrders()),
  fetchCustomers: () => dispatch(fetchCustomers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Loader)