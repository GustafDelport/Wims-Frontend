import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Container, Content } from 'rsuite';

function SuppliersComponent(){
        return (
        <>
            <Helmet>
                <title>Suppliers</title>
            </Helmet>

            <Content className='container-content'>
                <h2>Suppliers</h2>
            </Content>
        </>
    )
}

export default SuppliersComponent