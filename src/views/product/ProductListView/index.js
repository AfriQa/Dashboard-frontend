import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Pagination } from "@material-ui/lab";
import Page from "../../../components/Page";

import Toolbar from "./Toolbar";
import ProductCard from "./ProductCard";
import data from "./data";
import "./products.css";

const ProductList = () => {
  const [products] = useState(data);

  return (
    <Page className="indexRoot" title="Products">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item key={product.id} lg={4} md={6} xs={12}>
                <ProductCard className="productCard" product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Page>
  );
};

export default ProductList;
