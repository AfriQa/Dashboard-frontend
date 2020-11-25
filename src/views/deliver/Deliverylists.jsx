import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid, Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import DeliveryProgress from "./DeliveryProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "10px",
    borderRadius: "15px",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  chip: {
    margin: "5px",
  },

  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export default function Deliverylists() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.heading}>
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
              <Grid className={classes.chip}>
                CUSTOMER :{" "}
                <Chip
                  variant="outlined"
                  color="secondary"
                  size="xl"
                  label="This Person Name "
                  avatar={<Avatar src="/static/images/avatars/avatar_6.png'" />}
                >
                  this person Name
                </Chip>
              </Grid>
            </Typography>
            <Typography>
              <Grid className={classes.chip}>
                From :{" "}
                <Chip label="starting LOcation name" variant="outlined" />
                {"   "} To :{" "}
                <Chip label=" destination LOcation name" variant="outlined" />
                {"   "} Total Distance :{" "}
                <Chip label=" 20 km" variant="outlined" />
              </Grid>
              <Grid className={classes.chip}>
                {"   "} Orderd : <Chip label="2 min ago " variant="outlined" />
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
              //   onClick={deliverDetails}
            >
              Accept Order{" "}
            </Button>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DeliveryProgress />
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            Disabled Accordion
          </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
