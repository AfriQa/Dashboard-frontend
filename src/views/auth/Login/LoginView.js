import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '../../../icons/Facebook'
import GoogleIcon from '../../../icons/Google';
import TwitterIcon from '@material-ui/icons/Twitter';
import Page from "../../../components/Page"
import Image from "../../../images/bagLogo.jpg";
import Divider from '@material-ui/core/Divider';
import './logIn.css'
import { Spinner } from "reactstrap"
import { Navigate } from "react-router-dom"
import appRoutes from "../../../constants/appRoutes"

const LoginView = ({
    isSent,
    send_loading,
    verify_loading,
    sendText,
    verify,
    isAuthenticated
}) => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [phoneNumberErrors, setPhoneNumberErrors] = useState({ value: false, text: "" })
    const [redirect, setRedirect] = useState("")

    const handlePhoneNumberSubmit = () => {
        if (String(phoneNumber).length <= 0) {
            setPhoneNumberErrors({ value: true, text: "Please enter your phone number" })
        } else {
            setPhoneNumberErrors({ value: false, text: "" })
            sendText(phoneNumber)
        }
    }

    const handlePhoneNumber = event => {
        setPhoneNumber(String(event.target.value))
    }

    const [code, setCode] = useState("")
    const [codeErrors, setCodeErrors] = useState({ value: false, text: "" })

    const handleCode = event => {
        setCode(String(event.target.value))
    }

    const handleCodeSubmit = () => {
        if (String(code).length <= 0) {
            setCodeErrors({ value: true, text: "Please enter your verification code" })
        } else {
            setCodeErrors({ value: false, text: "" })
            verify(code)
        }
    }

    useEffect(() => {
        if (isSent) setPhoneNumber("")
    }, [isSent])

    useEffect(() => {
        if (isAuthenticated) {
            setRedirect(appRoutes.ROOT)
        }
    }, [isAuthenticated, setRedirect])

    if (String(redirect).length > 0) {
        return <Navigate to={redirect} />
    }

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
                            {
                                isSent? (
                                    <div>
                                        <TextField color="secondary" variant="filled" label="Verification Code" style={{
                                            borderRadius: '20px'
                                        }} onChange={handleCode} value={code} />
                                        {
                                            codeErrors.value?
                                            <div style={{ color: "red" }}>{codeErrors.text}</div> : ""
                                        }
                                    </div>
                                ) :  (
                                    <div>
                                        <TextField color="secondary" variant="filled" label="Phone Number " style={{
                                            borderRadius: '20px'
                                        }} onChange={handlePhoneNumber} />
                                        {
                                        phoneNumberErrors.value?
                                        <div style={{ color: "red" }}>{phoneNumberErrors.text}</div> : ""
                                        }
                                    </div>
                                    
                                )
                            }
                            <div style={{ height: 40 }} />
                            <Button
                                style={{ borderRadius: '20px' }} color="secondary" variant="contained"
                                onClick={isSent? handleCodeSubmit : handlePhoneNumberSubmit}
                            >
                                { send_loading || verify_loading? <Spinner /> : "Login" }
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