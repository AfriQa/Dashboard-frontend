import React, { useCallback, useEffect } from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { DropzoneArea } from 'material-ui-dropzone';
import "../customer.css"
import {
    Form
} from "reactstrap"
// import { initialState, handleChange, events, handleSubmit } from "./form"
import ParentForm from "../../common/form"
import Joi from "joi-browser"

class AddForm extends ParentForm {
    constructor() {
        super()
        this.initialState = {
            data: {
                firstName: "",
                lastName: "",
                email: "",
                location: "",
                phoneNumber: "",
                quantity_purchased: "",
                totalAmount: "",
            },
            errors: {}
        }
        this.schema = {
            firstName: Joi.string().required().label("First Name"),
            lastName: Joi.string().required().label("First Name"),
            email: Joi.string().required().label("First Name"),
            location: Joi.string().required().label("First Name"),
            phoneNumber: Joi.string().required().label("First Name"),
            quantity_purchased: Joi.number().required().label("First Name"),
            totalAmount: Joi.number().required().label("First Name"),
        }
        this.state = this.initialState
    }

    doSubmit() {
        this.props.addCustomer(this.state.data)
    }

    render() {
        return (
            <div>
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
                        label: "Phone Number",
                        type: "number"
                    })}
                    {this.renderInput({
                        name: "location",
                        label: "Location",
                    })}
                    {this.renderInput({
                        name: "quantity_purchased",
                        label: "Quantity Purchased",
                        type: "number"
                    })}
                    {this.renderInput({
                        name: "totalAmount",
                        label: "Total Amount",
                        type: "number"
                    })}
                    {this.renderButton("Add Customer")}
                </Form>
            </div>
        )
    }
}

const AddCustomer = ({ addCustomer, doneAdd }) => {
    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    useEffect(() => {
        if (doneAdd) handleClose()
    }, [doneAdd, handleClose, setOpen])

    return (
        <div>
            <Dialog size="large" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add details of A customer </DialogTitle>
                <DialogContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        {/* <Grid
                            className="inputfeilds"
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                style={{ margin: 10 }}
                                placeholder="First Name"
                                helperText="First Name "
                                color="secondary"
                                required
                                fullWidth
                                name="firstName"
                                onChange={({ currentTarget }) => {
                                    handleChange({
                                        type: events.UPDATE_FORM,
                                        target: currentTarget,
                                        state: form,
                                        setState: setForm,
                                        format: String
                                    })
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                type="text"
                                style={{ margin: 10 }}
                                placeholder="Last Name"
                                helperText="Last Name"
                                fullWidth
                                color="secondary"
                                required
                                name="lastName"
                                onChange={({ currentTarget }) => handleChange({
                                    type: events.UPDATE_FORM,
                                    target: currentTarget,
                                    state: form,
                                    setState: setForm,
                                    format: String
                                })}
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                style={{ margin: 10 }}
                                type="email"
                                helperText="Email"
                                color="secondary"
                                placeholder="E-mail "
                                name="email"
                                onChange={({ currentTarget }) => handleChange({
                                    type: events.UPDATE_FORM,
                                    target: currentTarget,
                                    state: form,
                                    setState: setForm,
                                    format: String
                                })}
                            />

                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                style={{ margin: 10 }}
                                type="number"
                                helperText="Phone Number"
                                color="secondary"
                                placeholder="Phone Number"
                                name="phoneNumber"
                                onChange={({ currentTarget }) => handleChange({
                                    type: events.UPDATE_FORM,
                                    target: currentTarget,
                                    state: form,
                                    setState: setForm,
                                    format: String
                                })}
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                style={{ margin: 10 }}
                                placeholder="Location"
                                helperText="Location "
                                fullWidth
                                color="secondary"
                                required
                                type="location"
                                name="location"
                                onChange={({ currentTarget }) => handleChange({
                                    type: events.UPDATE_FORM,
                                    target: currentTarget,
                                    state: form,
                                    setState: setForm,
                                    format: String
                                })}
                            >
                            </TextField>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                style={{ margin: 10 }}
                                placeholder="Number of items Purchased  "
                                helperText="Number of items Purchased   "
                                fullWidth
                                color="secondary"
                                required
                                type="number"
                                name="quantity_purchased"
                                onChange={({ currentTarget }) => handleChange({
                                    type: events.UPDATE_FORM,
                                    target: currentTarget,
                                    state: form,
                                    setState: setForm,
                                    format: Number
                                })}
                            >
                            </TextField>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                style={{ margin: 10 }}
                                placeholder="Toatal Money Spent"
                                helperText="Toatal Money Spent"
                                fullWidth
                                color="secondary"
                                required
                                type="number"
                                name="amount"
                                onChange={({ currentTarget }) => handleChange({
                                    type: events.UPDATE_FORM,
                                    target: currentTarget,
                                    state: form,
                                    setState: setForm,
                                    format: Number
                                })}
                            >
                            </TextField>
                        </Grid> */}
                        <AddForm addCustomer={addCustomer} />
                        <Grid
                            item
                            md={12}
                            xs={12}
                        >
                            <DropzoneArea
                                acceptedFiles={['image/*']}
                                dropzoneText={"Add images "}
                                filesLimit="1"
                                style={{ margin: 10 }}
                                onChange={(files) => console.log('Files:', files)}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions className="box">
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button variant="contained" color="secondary" className="box">
                        Add Customer
                    </Button>
                </DialogActions>
            </Dialog>
            <Button color="secondary" variant="contained" onClick={handleClickOpen} >
                Add Customer
            </Button>
        </div>
    )
}

export default AddCustomer;