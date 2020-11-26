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
    isOrdered: false,
  };

  handleAcceptedOrder = () => {
    this.setState({
      isOrdered: true,
    });
  };

  handleHide = () => {
    this.setState({
      isOrdered: false,
    });
  };
  render() {
    if (this.state.isOrdered) {
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
                  <h1> 5 kg sugar to "Customer Name "</h1>
                </strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DeliveryProgress />
            </AccordionDetails>
          </Accordion>
          {/* <button onClick={this.handleHide}>Hide</button> */}
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
                    <h1> 5 Kg, Sugar ( 50-ETB) </h1>{" "}
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
                      label="This Person Name "
                      avatar={
                        <Avatar src="/static/images/avatars/avatar_6.png'" />
                      }
                    >
                      this person Name
                    </Chip>
                  </Grid>
                  <br />
                </Typography>
                <Typography>
                  <Grid className="chip">
                    From :{" "}
                    <Chip label="starting LOcation name" variant="outlined" />
                    {"   "} To :{" "}
                    <Chip
                      label=" destination LOcation name"
                      variant="outlined"
                    />
                    {"   "} Total Distance :{" "}
                    <Chip label=" 20 km" variant="outlined" />
                  </Grid>
                  <br />
                  <Grid className="chip">
                    {"   "} Orderd :{" "}
                    <Chip label="2 min ago " variant="outlined" />
                    {"   "} Estimated Delivery time :{" "}
                    <Chip label=" 30 min " variant="outlined" />
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
