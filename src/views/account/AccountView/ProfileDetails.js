import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import "./accountView.css";
const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];


const ProfileDetails = ({ ...rest }) => {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '0900 00 00 00',
    state: 'Alabama',
    country: 'USA',
    shopname: 'some shop name '
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      className="profileDetailsRoot"
    >
      <Card>
        <CardHeader
          subheader="Update your Information"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              className="inputfeilds"
              item
              md={6}
              xs={12}
            >
              <TextField
                onChange={handleChange}
                style={{ margin: 10 }}
                placeholder={values.firstName}
                helperText="specify the first name"
                color="secondary"
                required
                fullWidth
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                onChange={handleChange}
                style={{ margin: 10 }}
                placeholder={values.lastName}
                helperText="specify Your last name"
                fullWidth
                color="secondary"
                required
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                onChange={handleChange}
                style={{ margin: 10 }}
                placeholder={values.email}
                helperText="Email Adress"
                fullWidth
                color="secondary"
                required
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                onChange={handleChange}
                style={{ margin: 10 }}
                placeholder={values.phone}
                helperText="Phone Number"
                fullWidth
                color="secondary"
                required
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                onChange={handleChange}
                style={{ margin: 10 }}
                placeholder={values.country}
                helperText="Country"
                fullWidth
                color="secondary"
                required
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                onChange={handleChange}
                style={{ margin: 10 }}
                placeholder={values.state}
                helperText="City "
                fullWidth
                color="secondary"
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                style={{ margin: 10 }}
                placeholder={values.state}
                helperText="Shop Category "
                fullWidth
                select
                color="secondary"
                required
                onChange={handleChange}
                SelectProps={{ native: true }}
                value={values.state}
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                onChange={handleChange}
                style={{ margin: 10 }}
                placeholder="Shop Name "
                helperText="Shop Name"
                fullWidth
                color="secondary"
                required
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          className="submitButton"
        >
          <Button
            color="secondary"
            variant="contained"
          >
            Update details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default ProfileDetails;
