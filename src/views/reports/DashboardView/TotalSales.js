import React , { PureComponent }  from 'react';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { colors, makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';


import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';



const data = [
  {
    name: 'JAN', uv: 1000, pv: 2400, amt: 2400,
  },
  {
    name: 'FEB', uv: 2000, pv: 1398, amt: 2210,
  },
  {
    name: 'MAR', uv: 4000, pv: 9800, amt: 2290,
  },
  {
    name: 'APR', uv: 4780, pv: 3908, amt: 2000,
  },
  {
    name: 'MAY', uv: 5890, pv: 4800, amt: 2181,
  },
  {
    name: 'JUN', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'JUL', uv: 8490, pv: 4300, amt: 2100,
  },
];
              
class Chart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/g03265a4/';

  render() {
    return (
      <AreaChart
      width={250}
      height={400}
      data={data}
      margin={{
        top: 10, right: 10, left: 0, bottom: 30,
      }}
    >
      <CartesianGrid strokeDasharray="3 7" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="number" dataKey="uv" stroke="#8884d8" fill="#43a047" />
    </AreaChart>
    );
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '500px',
    borderRadius: '15px',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))'
  },
  avatar: {
    backgroundColor: colors.green[600],
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))',
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.green[900]
  },
  differenceValue: {
    color: colors.green[900],
    marginRight: theme.spacing(1)
  }
}));

const TotalCustomers = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              TOTAL SALES
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              1,600
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
          <ArrowUpwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            16%
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Since last month
          </Typography>
        </Box>
      </CardContent>
      <Chart/>
    </Card>
  );
};

TotalCustomers.propTypes = {
  className: PropTypes.string
};

export default TotalCustomers;
