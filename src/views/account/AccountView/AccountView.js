import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'F0F0F0',
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(5),
    
  }
}));

const Account = ({ userInfo, editUserInfo, doneEdit }) => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Account"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <Profile userInfo={userInfo} />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <ProfileDetails userInfo={userInfo} editUserInfo={editUserInfo} doneEdit={doneEdit} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Account;
