import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tooltip from "@material-ui/core/Tooltip";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux"
import { getCustomerOrders } from "../../resolvers/Customer/CustomerState"
import { getProductStrings } from "../../resolvers/Product/ProductState"

import "./customer.css";

const data = [
  {
    id: uuid(),
    ref: "CDD1049",
    amount: 30.5,
    items: {
      item: "Ekaterina Tankova",
    },
    createdAt: 1555016400000,
    status: "pending",
    price: "200",
  },
  {
    id: uuid(),
    ref: "CDD1048",
    amount: 25.1,
    items: {
      item: "Cao Yu",
    },
    createdAt: 1555016400000,
    status: "delivered",
    price: "20000",
  },
  {
    id: uuid(),
    ref: "CDD1047",
    amount: 10.99,
    items: {
      item: "Alexa Richardson",
    },
    createdAt: 1554930000000,
    status: "refunded",
    price: "8960",
  },
  {
    id: uuid(),
    ref: "CDD1046",
    amount: 96.43,
    items: {
      item: "Anje Keizer",
    },
    createdAt: 1554757200000,
    status: "pending",
    price: "1.00",
  },
  {
    id: uuid(),
    ref: "CDD1045",
    amount: 32.54,
    items: {
      item: "Clarke Gillebert",
    },
    createdAt: 1554670800000,
    status: "delivered",
    price: "90",
  },
  {
    id: uuid(),
    ref: "CDD1044",
    amount: 16.76,
    items: {
      item: "Adam Denisov",
    },
    createdAt: 1554670800000,
    status: "delivered",
    price: "200",
  },
];

const History = ({ customer, customerOrders, rootState }) => {
  const [orders] = useState(data);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid className="inputfeilds" item md={6} xs={12}>
          <TextField
            placeholder="Full Name"
            helperText="Full Name "
            color="secondary"
            value={customer.name}
            disabled
            required
            fullWidth
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            type="number"
            disabled
            helperText="Phone Number "
            color="secondary"
            placeholder="Phone Number "
            value={customer.phoneNumber}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            disabled
            type="email"
            helperText="Email"
            color="secondary"
            placeholder="E-mail "
            value={customer.email}
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <TextField
            placeholder="Location"
            helperText="Location "
            disabled
            color="secondary"
            required
            type="location"
            value="here"
          ></TextField>
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            disabled
            placeholder="Regestration Date"
            helperText="Regestration Date"
            fullWidth
            color="secondary"
            type="date"
            value={moment(Number(customer.createdAt)).format('MM-DD-YY')}
          ></TextField>
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            disabled
            placeholder="Number of items Purchased  "
            helperText="Number of items Purchased   "
            fullWidth
            color="secondary"
            required
            type="number"
            value={10}
          ></TextField>
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            disabled
            placeholder="Total Money Spent"
            helperText="Total Money Spent"
            fullWidth
            color="secondary"
            required
            type="number"
            value={10}
          ></TextField>
        </Grid>
      </Grid>

      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead color="secondary">
              <TableRow>
                <TableCell>Order Ref</TableCell>
                <TableCell>Items Purchased</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerOrders.map((order) => (
                <TableRow hover key={order.id}>
                  <TableCell>{"some ref"}</TableCell>
                  <TableCell>
                    {getProductStrings(rootState, order.items)}
                  </TableCell>
                  <TableCell>
                    {moment(Number(order.createdAt)).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box display="flex" justifyContent="flex-end" p={2}></Box>
    </div>
  );
};

const ModalCustomer = ({ customer: fetchedCustomer, rootState }) => {
  const customer = {
    _id: "sdvsdv",
    ...fetchedCustomer
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="history">
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Details
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Customer Details"}</DialogTitle>
        <DialogContent>
          <History
            customer={customer}
            customerOrders={getCustomerOrders(rootState, customer._id)}
            rootState={rootState}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default connect(
  state => ({
    rootState: state
  })
)(ModalCustomer)