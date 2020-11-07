import React, { useState } from 'react'
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@material-ui/core'
import { Form } from "reactstrap"
import "./accountView.css"
import ParentForm from "../../common/form"
import Joi from "joi-browser"
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
]

class ProfileUpdate extends ParentForm  {
  constructor() {
    super()
    this.initialState = {
      data: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        city: "",
        country: "",
        shopName: "",
        shopCategory: "",
      },
      lockUpdate: false,
      errors: {}
    }
    this.schema = {
      firstName: Joi.string().required().label("First Name"),
      lastName: Joi.string().required().label("Last Name"),
      email: Joi.string().required().label("Email"),
      phoneNumber: Joi.string().required().label("Phone Number"),
      city: Joi.string().required().label("City"),
      country: Joi.string().required().label("Country"),
      shopName: Joi.string().required().label("Shop Name"),
      shopCategory: Joi.string().required().label("Shop Category"),
    }
    this.state = this.initialState
  }

  componentDidUpdate() {
    if (this.props.doneAdd) {
      this.resetForm()
    }
  }

  doSubmit() {
    this.props.submit(this.state.data)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.renderInput({
          name: "firstName",
          label: "First Name",
        })}
        {this.renderInput({
          name: "lastName",
          label: "Last Name",
        })}
        {this.renderInput({
          name: "email",
          label: "Email",
        })}
        {this.renderInput({
          name: "phoneNumber",
          label: "Phone Number"
        })}
        {this.renderInput({
          name: "country",
          label: "Country",
        })}
        {this.renderInput({
          name: "city",
          label: "City"
        })}
        {this.renderInput({
          name: "shopName",
          label: "Shop Name"
        })}
        {this.renderInput({
          name: "shopCategory",
          label: "Shop Category"
        })}
        {this.renderButton("Update Details")}
      </Form>
    )
  }
}


const ProfileDetails = ({ editUserInfo, doneEdit, ...rest }) => {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '0900 00 00 00',
    state: 'Alabama',
    country: 'USA',
    shopname: 'some shop name '
  })
  console.log(doneEdit)

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

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
        {/* <CardContent>
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
              />
            </Grid>
          </Grid>
        </CardContent> */}
        <CardContent>
          <ProfileUpdate submit={editUserInfo} doneEdit={doneEdit} />
        </CardContent>
        <Divider />
        <Box
          className="submitButton"
        >
          {/* <Button
            color="secondary"
            variant="contained"
          >
            Update details
          </Button> */}
        </Box>
      </Card>
    </form>
  )
}

export default ProfileDetails
