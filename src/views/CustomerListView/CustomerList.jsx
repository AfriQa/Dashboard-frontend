import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Page from '../../components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import './customer.css'

const CustomerListView = ({ customers, addCustomer, doneAdd, orders, products }) => {
  const [customerData] = useState(data);
  const mappedCustomers = customers.map((customer, idx) => ({
    ...customerData[idx],
    name: customer.firstName + " " + customer.lastName,
    phone: customer.phoneNumber,
    email: customer.email,
    location: customer.location,
    createdAt: Number(customer.createdAt)
  }))

  const fetchedOrders = Array(0).fill("").concat(orders).map(order => {
    const customer = customers.find(customer => order.customer === customer._id)
    if (customer) {
      return {
        ...data[0],
        id: order._id,
        createdAt: Number(order.createdAt),
        amount: Number(order.amount),
        status: String(order.status),
        customer: {
          name: customer.firstName + " " + customer.lastName,
          ...customer
        }
      }
    }
  })

  const _products = Array(orders.length).fill([])
  orders.forEach(order => ({
    ...order,
    products: Array(order.items.length).fill(order).map(order => {
      order.items.forEach((ID, idx) => {
        const index = products.findIndex(product => product._id === ID)
        if (index >= 0) {
          if (products[index].productName) {
            _products[idx].push({ name: products[index].productName, price: products[index].productPrice })
          }
        }
      })
    })
  }))

  const filteredOrders = fetchedOrders.map((order, idx) => ({ ...order, products: _products[idx] }))

  return (
    <Page
    className="indexRoot"
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar addCustomer={addCustomer} doneAdd={doneAdd} />
        <Box mt={3}>
          <Results customers={mappedCustomers} orders={filteredOrders} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;