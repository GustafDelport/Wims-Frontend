import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Container, Content } from 'rsuite';

function CurrentOrdersComponent(){
    return (
        <>
            <Helmet>
                <title>Current Orders</title>
            </Helmet>
            <Content className='container-content'>
                <h2>Current Orders</h2>
            </Content>
        </> 
    )
}

export default CurrentOrdersComponent