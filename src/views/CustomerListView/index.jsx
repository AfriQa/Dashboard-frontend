import React, { useState, useEffect }from 'react'
import Customers from "./CustomerList"
import {
  fetchCustomers, selectCustomers, selectFetchStatus, selectAddStatus, addCustomer
} from "../../redux/States/Customers"
import { connect } from "react-redux"
import { reduxStatus } from "../../constants/reduxStatus"
import { reverse } from "../../helpers/reverse"

const Loader = ({ fetchStatus, addStatus, fetchCustomers, customers, addCustomer }) => {
  const [fetchLock, setFetchLock] = useState(true)
  const [addLock, setAddLock] = useState(true)

  useEffect(() => {
    setFetchLock(false)
    fetchCustomers()
  }, [fetchCustomers, setFetchLock])

  useEffect(() => {
    const { status } = fetchStatus
    if (status === reduxStatus.failure && !fetchLock) {
      console.error("Failed fetching customers")
    }
    setFetchLock(true)
  }, [fetchStatus, setFetchLock, fetchLock])

  useEffect(() => {
    const { status } = addStatus
    if (status === reduxStatus.failure && !addLock) {
      console.error("Failed adding customer")
    }
  }, [addStatus, setAddLock, addLock])

  const _addCustomer = (data) => {
    setAddLock(false)
    addCustomer({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      location: data.location,
      phoneNumber: data.phoneNumber,
      totalAmount: Number(data.totalAmount),
      quantityPurchased: Number(data.quantity_purchased)
    })
  }

  return (
    <Customers
      customers={reverse(customers)}
      addCustomer={_addCustomer}
      doneAdd={addStatus.status === reduxStatus.success && !addLock}
    />
  )
}

const mapStateToProps = state => ({
  customers: selectCustomers(state),
  fetchStatus: selectFetchStatus(state),
  addStatus: selectAddStatus(state)
})

const mapDispatchToProps = dispatch => ({
  fetchCustomers : () => dispatch(fetchCustomers()),
  addCustomer: data => dispatch(addCustomer(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Loader)