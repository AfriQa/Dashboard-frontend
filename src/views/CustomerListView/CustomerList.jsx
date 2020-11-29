import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Page from '../../components/Page';

import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import './customer.css'

const CustomerListView = () => {
  return (
    <Page
    className="indexRoot"
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results customer={data} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView