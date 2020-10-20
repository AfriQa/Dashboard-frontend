import React from 'react';

import {
  Box,

  InputAdornment,
  SvgIcon,
} from '@material-ui/core';

import { Search as SearchIcon } from 'react-feather';
import "./products.css"


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// export default






const Toolbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="secondary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
      <Box className="box">

        <Button>
          Import
        </Button>
        <Button >
          Export
        </Button>
        <Button color="secondary" variant="contained" onClick={handleClickOpen} >
          Add Product
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
          placeholder="Search Product "
          variant="outlined"
        />
       
      </div>
    </div>
  );
};



export default Toolbar;
