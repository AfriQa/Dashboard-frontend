import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from '@material-ui/core';
import './settings.css'

const Password = ({ className, ...rest }) => {
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      className="root"
    >
      <Card>
        <CardHeader
          subheader="Update password"
          title="Password"
        />
        <Divider />
        <CardContent>
          <TextField
            onChange={handleChange}
            //  value={values.password}
            id="standard-full-width"
            style={{ margin: 10 }}
            placeholder=" Current Password "
            helperText="Your current Password "
            fullWidth
            color="secondary"
          />

          <TextField

            onChange={handleChange}
            // value={values.password}
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder=" New Password "
            helperText="New Password "
            fullWidth
            type="password"
            color="secondary"
          />


          <TextField
            onChange={handleChange}
            //  value={values.password}
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="Confirm Password "
            helperText="Confirm New Password "
            fullWidth
            type="password"
            color="secondary"
          />
        </CardContent>
        <Divider />
        <Box
          className="box"
          p={2}
        >
          <Button
            color="secondary"
            variant="contained"
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};


export default Password;
