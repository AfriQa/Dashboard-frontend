import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,

} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import './settings.css'

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const Notifications = ({ className, ...rest }) => {
  return (
    <form>
      <Card className="root">
        <CardHeader
          subheader="Manage the notifications"
          title="Notifications"
        />
        <Divider />
        <CardContent>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
          >
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              Notifications and Messages
              </Typography>
            <div className="checkBox">
              <FormControlLabel
                control={<GreenCheckbox
                  name="email" />}
                label="Email"
              />

              <FormControlLabel
                control={<GreenCheckbox
                  name="pushNotifications" />}
                label="Push Notifications "
              />
              <FormControlLabel
                control={<GreenCheckbox
                  name="textMessage" />}
                label="Text Messages"
              />
            </div>
          </Grid>
        </CardContent>
        <Divider />
        <Box className="box">
          <Button
            color="secondary"
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </Card>
    </form>
  );
};



export default Notifications;
