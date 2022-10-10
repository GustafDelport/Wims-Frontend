import React from 'react';
import {Helmet} from "react-helmet";
import {Content, FlexboxGrid, Col } from 'rsuite';

import ProductTable from './Products.Table.component';
import ProductsValueComponent from './Products.Value.component';
import ProductsTrendingComponent from './Products.Trending.component';
import ProductsLowStockComponent from './Products.LowStock';

function ProductsComponent(){
        return (
        <>
            <Helmet>
                <title>Products</title>
            </Helmet>
                <Content className='container-content'>
                    <div className='show-grid'>
                        <FlexboxGrid justify="space-around">
                            <FlexboxGrid.Item as={Col} md={7} className='Product-Widget-One' colspan={24}>
                                <ProductsValueComponent/>
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item as={Col} md={7} colspan={24}>
                                <ProductsTrendingComponent/>   
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item as={Col} md={7} colspan={24}>
                                <ProductsLowStockComponent/>
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