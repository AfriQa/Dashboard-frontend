import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '../../icons/Facebook'
import GoogleIcon from '../../icons/Google';
import TwitterIcon from '@material-ui/icons/Twitter';
import Page from "../../components/Page"
import Image from "../../images/bagLogo.jpg";
import Divider from '@material-ui/core/Divider';
import './logIn.css'

const LoginView = () => {


    return (
        <Page title="Login" >
            <div className="everything">
                <Grid container style={{ minHeight: '10vh' }}>
                    <Grid alignContent="center" item xs={12} sm={6}>

                        <img src={Image} className="bagImage" alt="liginImage" />
                        <div className="afriName">   Afri - Eqa</div>
                    </Grid>

                    <Grid container item xs={12} sm={6}
                        alignContent="center"
                        direction="column"
                        justify="flex-start"
                        className="randOne"
                    >
                        <div />
                        <div className="formContainer" >
                            <Grid container justify="center">

                                <h1 className="signHeader">sign in</h1>
                                <h2 className="infotext" > use your phone number to log in or create a new account </h2>
                            </Grid>
                            <div style={{ height: 30 }} />
                            <TextField color="secondary" variant="filled" label="Phone Number " style={{
                                borderRadius: '20px'
                            }} />
                            <div style={{ height: 40 }} />
                            <Button style={{ borderRadius: '20px' }} color="secondary" variant="contained">
                                login
                            </Button>
                            <div style={{ height: 40 }} />


                            <h2 color="secondary" className="infotext" style={{
                               
                            }} > or login using  </h2>
                            <div style={{ height: 30 }} />

                            <Divider />

                            <Grid align="center" justify="space-between" >
                                <IconButton color="secondary" >
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton color="secondary" >
                                    <GoogleIcon />
                                </IconButton>
                                <IconButton color="secondary" >
                                    <FacebookIcon />
                                </IconButton>
                            </Grid>
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