import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Container, Content, FlexboxGrid, Col } from 'rsuite';

import ProductTable from './Products.Table.component';
import ProductsValueComponent from './Products.Value.component';

function ProductsComponent(){
        return (
        <>
            <Helmet>
                <title>Products</title>
            </Helmet>
                <Content className='container-content'>
                    <div className='show-grid'>
                        <FlexboxGrid justify="space-around" style={{margin: '2rem'}}>
                            <FlexboxGrid.Item colspan={8}>
                                <ProductsValueComponent/>
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={8}>
                                <ProductsValueComponent/>   
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={8}>
                                <ProductsValueComponent/>
                            </FlexboxGrid.Item>
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