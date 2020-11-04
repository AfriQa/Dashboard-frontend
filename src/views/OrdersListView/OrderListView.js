import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Page from '../../components/Page';

import Results from './Results';
import Toolbar from './Toolbar';
// import data from './data';
import './orders.css'

const OrdersListView = ({ orders, customers }) => {
  // const [customers] = useState(data);

  return (
    <Page
    className="indexRoot"
      title="Orders"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results orders={orders} customers={customers} />
        </Box>
      </Container>
    </Page>
  );
};

export default OrdersListView;
