import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  ListItem,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  item: {

    display: 'flex',
    paddingTop: 10,
    paddingLeft: 30,
    paddingBottom: 0,

  },
  button: {
    color: theme.palette.text.primary,
    backgroundColor: 'F0F0F0',
    fontWeight: 900,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%'
  },
  icon: {
    marginRight: theme.spacing(3)
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    color: '#77E393',
    '& $title': {
      border: 'none',
      color: '#77E393',
      fontWeight: '900',
      textTransform: 'inherit',
      borderRadius: '30px',
    },
    '& $icon': {
      color: '#77E393',
    }
  }
}));

const NavItem = ({
  className,
  href,
  icon: Icon,
  title,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        to={href}
      >
        {Icon && (
          <Icon
            className={classes.icon}
            size="20"
          />
        )}
        <span className={classes.title}>
          {title}
        </span>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavItem;
