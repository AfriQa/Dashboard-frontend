import React from 'react'
import Deliver from './Deliver'
import Page from '../../components/Page';
import Deliverylists from './Deliverylists'
import {Container} from '@material-ui/core';
// import 'leaflet/dist/leaflet.css'
export default function index() {
    return (
        <div>
            <Page
                className="indexRoot"
                title="Deliver"
            >
                <Container >
                    <Deliver />
                    <Deliverylists/>
                </Container>
              
            </Page>
        </div>
    )
}
