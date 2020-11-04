import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Page from '../../components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import './customer.css'

const CustomerListView = ({ customers, addCustomer, doneAdd }) => {
  const [customerData] = useState(data);
  const mappedCustomers = customers.map((customer, idx) => ({
    ...customerData[idx],
    name: customer.firstName + " " + customer.lastName,
    phone: customer.phoneNumber,
    email: customer.email,
    location: customer.location,
    createdAt: Number(customer.createdAt)
  }))

  return (
    <Page
    className="indexRoot"
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar addCustomer={addCustomer} doneAdd={doneAdd} />
        <Box mt={3}>
          <Results customers={mappedCustomers} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;