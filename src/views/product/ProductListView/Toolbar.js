import React from 'react';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: '   0px 4px rgba(0.25, 0, 0.25, 0.25)',
  },
  Button: {
    marginRight: theme.spacing(1),
    borderRadius: '30px',
  },
  searchBar: {
    maxWidth: '100%',
    borderRadius: 30,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))'
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <Button className={classes.Button}>
          Import
        </Button>
        <Button className={classes.Button}>
          Export
        </Button>
        <Button
          className={classes.Button}
          color="primary"
          variant="contained"
        >
          Add product
        </Button>
      </Box>
      <Box mt={3}>
        <Card className={classes.searchBar}>
          <CardContent>

            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="large"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search your products"
              variant="outlined"
            />

          </CardContent>
        </Card>
      </Box>
    </div>
  );
};



export default Toolbar;
