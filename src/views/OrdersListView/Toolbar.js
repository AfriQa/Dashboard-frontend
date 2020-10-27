import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Search as SearchIcon } from 'react-feather';
import "./orders.css";
const Toolbar = () => {
  return (
    <div>
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
          placeholder="Search Orders "
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Toolbar;
