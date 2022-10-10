import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Container, Content, FlexboxGrid } from 'rsuite';

import ProductTable from './Products.Table.component';

function ProductsComponent(){
        return (
        <>
            <Helmet>
                <title>Products</title>
            </Helmet>
                <Content className='container-content'>
                    <div className='show-grid'>
                        <FlexboxGrid justify="center">
                            <FlexboxGrid.Item colspan={8}>colspan={12}</FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={8}>colspan={12}</FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={8}>colspan={12}</FlexboxGrid.Item>
                        </FlexboxGrid>
                    </div>
                </Content>
                <Content className='container-content'>
                    <ProductTable/>
                </Content >
        </> 
        )
}

export default ProductsComponent