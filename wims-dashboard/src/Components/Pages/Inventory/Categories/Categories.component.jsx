import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Container, Content } from 'rsuite';

function CategoriesComponent(){
        return (
        <>
            <Helmet>
                <title>Categories</title>
            </Helmet>
            
            <Content className='container-content'>
                <h2>Categories</h2>
            </Content>
        </> 
        )
}

export default CategoriesComponent