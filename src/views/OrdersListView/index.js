import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Page from '../../components/Page';

import Toolbar from './Toolbar';
// import data from './data';
import './orders.css'
import LatestOrders from './LatestOrders';

const OrdersListView = () => {

  return (
    <Page
    className="indexRoot"
      title="Orders"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <LatestOrders />
        </Box>
      </Container>
    </Page>
  );
};

export default OrdersListView;
