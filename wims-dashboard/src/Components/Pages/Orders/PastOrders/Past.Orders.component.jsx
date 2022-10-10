import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Container, Content } from 'rsuite';

const PastOrdersComponent = () =>{
        return (
        <>
            <Helmet>
                <title>Past Orders</title>
            </Helmet>
            <Content className='container-content'>
                <h2>Past Orders</h2>
            </Content>    
        </>
            
    )
}

export default PastOrdersComponent