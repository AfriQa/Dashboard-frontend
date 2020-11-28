import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import { DropzoneArea } from "material-ui-dropzone";
import "./customer.css";

function AddCustomer() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        size="large"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Add details of A customer{" "}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid className="inputfeilds" item md={6} xs={12}>
              <TextField
                style={{ margin: 10 }}
                placeholder="First Name"
                helperText="First Name "
                color="secondary"
                required
                fullWidth
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                type="text"
                style={{ margin: 10 }}
                placeholder="Last Name"
                helperText="Last Name"
                fullWidth
                color="secondary"
                required
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                style={{ margin: 10 }}
                type="email"
                helperText="Email"
                color="secondary"
                placeholder="E-mail "
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                style={{ margin: 10 }}
                type="number"
                helperText="Phone Number "
                color="secondary"
                placeholder="Phone Number "
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                // onChange={handleChange}
                style={{ margin: 10 }}
                placeholder="Location"
                helperText="Location "
                fullWidth
                color="secondary"
                required
                type="location"
              ></TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                // onChange={handleChange}
                style={{ margin: 10 }}
                placeholder="Regestration Date"
                helperText="Regestration Date"
                fullWidth
                color="secondary"
                type="date"
              ></TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                // onChange={handleChange}
                style={{ margin: 10 }}
                placeholder="Number of items Purchased  "
                helperText="Number of items Purchased   "
                fullWidth
                color="secondary"
                required
                type="number"
              ></TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                // onChange={handleChange}
                style={{ margin: 10 }}
                placeholder="Toatal Money Spent   "
                helperText="Toatal Money Spent    "
                fullWidth
                color="secondary"
                required
                type="number"
              ></TextField>
            </Grid>
            <Grid item md={12} xs={12}>
              <DropzoneArea
                acceptedFiles={["image/*"]}
                dropzoneText={"Add images "}
                filesLimit="1"
                style={{ margin: 10 }}
                onChange={(files) => console.log("Files:", files)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className="box">
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            color="secondary"
            className="box"
          >
            Add Customer
          </Button>
        </DialogActions>
      </Dialog>

      <Button color="secondary" variant="contained" onClick={handleClickOpen}>
        Add Customer
      </Button>
    </div>
  );
}

export default AddCustomer;
