import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography,
    makeStyles
} from '@material-ui/core';

import FacebookIcon from '../../icons/Facebook'
import GoogleIcon from '../../icons/Google';
import Page from "../../components/Page"
import Image from "../../images/bagLogo.jpg";
import LogoImg from "../../images/AfriLogo.svg"



const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.background.dark,
        // height: '100%',
        // paddingBottom: theme.spacing(3),
        // paddingTop: theme.spacing(3)
    },

}));

const LoginView = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Page
            //   className={classes.root}
            title="Login"
        >
            <div>
                <Grid container style={{ minHeight: '100vh' }}>
                    <Grid item xs={12} sm={6}>

                        <img src={Image}
                            style={{
                                width: '100%',
                                height: '70%',
                                objectFit: 'cover'
                            }} alt="liginImage" />
                    </Grid>

                    <Grid container item xs={12} sm={6}
                        alignContent="center" direction="column"
                        justify="space-between"
                        style={{
                            padding: 10
                        }}>
                        <div />
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            maxWidth: 400,
                            minWidth: 300
                        }}>
                            <Grid container justify="center">
                                {/* <img src={LogoImg} width={100} /> */}
                                <h1 style={{
                                    fontSize: '120px',
                                    fontFamily: 'Open Sans',
                                    fontWeight: '200',
                                    marginTop: '0px',
                                    marginBottom: '60px',
                                    left: '615px',
                                    top: '49px',
                                }}>sign in</h1>
                                <h2 style={{
                                    fontFamily: 'Open Sans',
                                    fontWeight: '300',
                                    fontSize: '21px',
                                    lineHeight: '29px',
                                    textAlign: 'center',
                                }} > use your phone number to log in or create a new account </h2>
                            </Grid>
                            <TextField color="secondary" label="Phone Number " margin="normal" />
                            <div style={{ height: 20 }} />
                            <Button style={{borderRadius:'20px'}} color="secondary"  variant="contained">
                                login
                            </Button>
                            <div style={{ height: 20 }} />
                            {/* <button> learn more</button> */}
                        </div>
                        <div />
                        <div />
                    </Grid>
                </Grid>



            </div>
        </Page>
    );
};

export default LoginView;