import React from 'react';
import {
  Box,
  Container,
} from '@material-ui/core';
import Page from '../../../components/Page';

import Notifications from './Notifications';
import Password from './Password';
import './settings.css'

const SettingsView = () => {


  return (
    <Page
      className="indexRoot"
      title="Settings"
    >
      <Container maxWidth="lg">
        <Notifications />
        <Box mt={3}>
          <Password />
        </Box>
      </Container>
    </Page>
  );
};

export default SettingsView;
