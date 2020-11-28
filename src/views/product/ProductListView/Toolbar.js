import React from "react";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Search as SearchIcon } from "react-feather";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./products.css";
import AddProduct from "./addproduct";

const Toolbar = () => {
  return (
    <div>
      <Box className="box">
        <Button>Import</Button>
        <Button>Export</Button>
        <AddProduct />
      </Box>
      <div className="searchBar">
        <TextField
          fullWidth
          color="secondary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon fontSize="large" color="secondary">
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            ),
          }}
          placeholder="Search Product "
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Toolbar;
