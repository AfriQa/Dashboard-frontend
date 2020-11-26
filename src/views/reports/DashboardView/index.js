import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Page from "../../../components/Page";

import Budget from "./Budget";
import LatestOrders from "../../OrdersListView/LatestOrders";
import LatestProducts from "./LatestProducts";
import Sales from "./Sales";
import ShopVisits from "./ShopVisits";
import TotalSales from "./TotalSales";
import TotalProfit from "./TotalProfit";
import TrafficByDevice from "./TrafficByDevice";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(6),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalSales />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <ShopVisits />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalProfit />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Sales />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <TrafficByDevice />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
