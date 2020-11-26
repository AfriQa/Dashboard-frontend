import React, { PureComponent } from "react";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { makeStyles, colors } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./dash.css";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "JAN",
    uv: 500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "FEB",
    uv: 1200,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "MAR",
    uv: 1900,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "APR",
    uv: 1380,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "MAY",
    uv: 2490,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "JUN",
    uv: 3690,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "JUL",
    uv: 2990,
    pv: 4300,
    amt: 2100,
  },
];

class Chart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/g03265a4/";

  render() {
    return (
      <AreaChart
        width={250}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 7" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="number" dataKey="uv" stroke="#8884d8" fill="#3949ab" />
      </AreaChart>
    );
  }
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: colors.indigo[600],
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))",
    height: 56,
    width: 56,
  },
  differenceIcon: {
    color: colors.red[900],
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1),
  },
}));

const TotalProfit = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className="shopvisitsRoot">
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              TOTAL PROFIT
            </Typography>
            <Typography color="textPrimary" variant="h3">
              $23,200
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AttachMoneyIcon />
            </Avatar>
          </Grid>
          <Box mt={2} display="flex" alignItems="center">
            <ArrowDownwardIcon className={classes.differenceIcon} />
            <Typography className={classes.differenceValue} variant="body2">
              12%
            </Typography>
            <Typography color="textSecondary" variant="caption">
              Since last month
            </Typography>
          </Box>
        </Grid>
      </CardContent>
      <Chart />
    </Card>
  );
};



export default TotalProfit;
