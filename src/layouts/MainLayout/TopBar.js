import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles(({
  root: {
    height: 64,
  },
  toolbar: {
   
    marginLeft: 90,
    marginTop:60,
    
  }
}));

const TopBar = ({ className, ...rest }) => {
  // const classes = useStyles();

  return (
    <div>
      <h1>this is atext </h1>
    </div>
    // <AppBar
    //   className={clsx(classes.root, className)}
    //   elevation={0}
    //   {...rest}
    // >
    //   <Toolbar className={classes.toolbar}>
    //     <RouterLink to="/">
    //       <Logo />
         
    //     </RouterLink>
       
    //   </Toolbar>
     
    // </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
