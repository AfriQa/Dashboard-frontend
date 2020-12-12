import React, { Component } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid, Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import DeliveryProgress from "./DeliveryProgress";
import "./deliver.css";

export default class Deliverylists extends Component {
  state = {
    isAccepted: Boolean(this.props.isAccepted)
  };

  handleAcceptedOrder = () => {
    this.props.acceptOrder()
    this.setState({
      isAccepted: true,
    });
  };

  handleHide = () => {
    this.setState({
      isAccepted: false,
    });
  };
  render() {
    const { itemString, totalPrice, customer, order } = this.props
    if (this.props.isAccepted) {
      return (
        <div className="root">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="heading">
                {" "}
                <strong>
                  <h1>{itemString} ({totalPrice})</h1>{" "}
                </strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DeliveryProgress
                order={order} customer={customer}
                pickOrder={this.props.pickOrder}
                arriveOrder={this.props.arriveOrder}
                payOrder={this.props.payOrder}
              />
            </AccordionDetails>
          </Accordion>
        </div>
      );
    } else {
      return (
        <div className="root">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="heading">
                <Typography>
                  {" "}
                  <strong>
                    <h1>{itemString} ({totalPrice})</h1>{" "}
                  </strong>{" "}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                classNmae="ml-10"
                item
                xs={9}
                container
                direction="row"
                justify="flex-start"
              >
                <Typography>
                  <Grid className="chip">
                    CUSTOMER :{" "}
                    <Chip
                      variant="outlined"
                      color="secondary"
                      size="xl"
                      label={customer.fullName}
                      avatar={
                        <Avatar src="/static/images/avatars/avatar_6.png'" />
                      }
                    >
                      {customer.fullName}
                    </Chip>
                  </Grid>
                  <br />
                </Typography>
                <Typography>
                  <Grid className="chip">
                    From :{" "}
                    <Chip label={order.orderInfo.address.from} variant="outlined" />
                    {"   "} To :{" "}
                    <Chip
                      label={order.orderInfo.address.from}
                      variant="outlined"
                    />
                    {"   "} Total Distance :{" "}
                    <Chip label={order.orderInfo.totalDistance} variant="outlined" />
                  </Grid>
                  <br />
                  <Grid className="chip">
                    {"   "} Orderd :{" "}
                    <Chip label={order.orderInfo.orderedTime} variant="outlined" />
                    {"   "} Estimated Delivery time :{" "}
                    <Chip label={order.orderInfo.estimatedDeliveryTime} variant="outlined" />
                  </Grid>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Button
                  color="secondary"
                  variant="outlined"
                  align="right"
                  size="large"
                  onClick={this.handleAcceptedOrder}
                >
                  Accept Order{" "}
                </Button>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </div>
      );
    }
  }
}
