import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Container, Content } from 'rsuite';

function DashboardComponent() {
        return (
            <>
                <Helmet>
                    <title>Wims Dashboard</title>
                </Helmet>
                <Content className='container-content'>
                    <h2>Dashboard</h2>
                </Content>
            </>
        )
}

export default DashboardComponent