import React from 'react';
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import "./customer.css";

const Toolbar = () => {
  return (
    <div  >
      <Box className="box"
        display="flex"
        justifyContent="flex-end"
      >
        <Button>
          Import
        </Button>
        <Button >
          Export
        </Button>
        <Button color="secondary" variant="contained" >
          Add customer
        </Button>
      </Box>
      <div className="searchBar" >
        <TextField
          fullWidth
          color="secondary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon
                  fontSize="large"
                  color="secondary"
                >
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            )
          }}
          placeholder="Search customer"
          variant="outlined"
        />

      </div>
    </div>

  );
};

export default Toolbar;
