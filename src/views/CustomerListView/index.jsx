import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Page from '../../components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import './customer.css'
import { connect } from "react-redux"
import { getCustomers } from "../../resolvers/Customer/CustomerState"

const CustomerListView = ({ rootState }) => {
  const [customers] = useState(data);

  return (
    <Page
    className="indexRoot"
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results
            customers={customers}
            fetchedCustomers={getCustomers(rootState)}
            rootState={rootState}
          />
        </Box>
      </Container>
    </Page>
  );
};


export default connect(
  state => ({ rootState: state })
)(CustomerListView)
