import React from "react";
import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./products.css";

const ProductCard = ({ className, product, ...rest }) => {
  return (
    <Card className="root">
      <CardContent>
        <Box display="flex" justifyContent="center" >
          <Avatar ml={3} alt="Product" src={product.media} variant="square" />
          <Avatar mr={3} alt="Product" src={product.media} variant="square" />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {product.title}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {product.description}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid container justify="space-between" spacing={2}>
          <Grid className="statsItem" item>
            <AccessTimeIcon color="action" />
            <Typography color="textSecondary" display="inline" variant="body2">
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid className="statsItem" item>
            <GetAppIcon color="action" />
            <Typography color="textSecondary" display="inline" variant="body2">
              {product.totalDownloads} Items sold
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default ProductCard;
