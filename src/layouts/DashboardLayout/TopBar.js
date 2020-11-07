import React, { useState, useEffect } from "react"
import { Link as RouterLink } from "react-router-dom"
import clsx from "clsx"
import PropTypes from "prop-types"
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined"
import InputIcon from "@material-ui/icons/Input"
import Logo from "../../components/Logo"
import { logout, isAuthenticated } from "../../redux/States/Auth"
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"
import appRoutes from "../../constants/appRoutes"

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: 90,
    borderRadius: "15px",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))",
  },
  avatar: {
    width: 60,
    height: 60,
  },
  h1: {
    display: "flex",
    align: "center",
    margin: 20,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "200",
    fontSize: "61px",
    lineHeight: "83px",

    color: "#000000",
  },
  logoIcon: {
    position: "relative",
    display: "flex",
    margin: 10,
    width: 50,
  },
}))

const TopBar = ({ className, onMobileNavOpen, isAuthenticated, logout, ...rest }) => {
  const classes = useStyles()
  const [notifications] = useState([])
  const [redirect, setRedirect] = useState("")
  const [lock, setLock] = useState(true)

  useEffect(() => {
    if (!isAuthenticated) {
      setRedirect("/login")
    }
  }, [isAuthenticated, setRedirect])

  if (redirect.length > 0 && !lock) {
    console.log("sdsvvsdv")
    return <Navigate to={redirect} />
  }

  return (
    <AppBar className={clsx(classes.root, className)} elevation={30} {...rest}>
      <Toolbar>
        <div>
          <RouterLink to="/">
            <Logo className={classes.logoIcon} />
          </RouterLink>
        </div>
        <h1 className={classes.h1}>AfriEqa</h1>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={() => {
            setLock(false)
            logout()
          }}>
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
})

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
