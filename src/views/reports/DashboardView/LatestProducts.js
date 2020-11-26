import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import moment from "moment";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import "./dash.css";
const data = [
  {
    id: uuid(),
    name: "Dropbox",
    imageUrl: "/static/images/products/product_1.png",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Medium Corporation",
    imageUrl: "/static/images/products/product_2.png",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Slack",
    imageUrl: "/static/images/products/product_3.png",
    updatedAt: moment().subtract(3, "hours"),
  },
  {
    id: uuid(),
    name: "Lyft",
    imageUrl: "/static/images/products/product_4.png",
    updatedAt: moment().subtract(5, "hours"),
  },
  {
    id: uuid(),
    name: "GitHub",
    imageUrl: "/static/images/products/product_5.png",
    updatedAt: moment().subtract(9, "hours"),
  },
];



const LatestProducts = ({ className, ...rest }) => {
  const [products] = useState(data);

  return (
    <Card className="latestproductRoot">
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Latest Products"
      />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem divider={i < products.length - 1} key={product.id}>
            <ListItemAvatar>
              <img
                alt="Product"
                className="latestproductImage"
                src={product.imageUrl}
              />
            </ListItemAvatar>
            <ListItemText
              primary={product.name}
              secondary={`Updated ${product.updatedAt.fromNow()}`}
            />
            <IconButton edge="end" size="small">
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

export default LatestProducts;
