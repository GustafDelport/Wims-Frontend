import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Container, Content } from 'rsuite';

import FooterComponent from '../../../Layouts/Footer/footer.component';
import SidebarComponent from '../../../Layouts/Navigation/sidebar.component';
import HeaderComponent from '../../../Layouts/Header/header.component';

import ProductTable from './Products.Table.component';

const ProductsComponent = () =>{
        return (
        <>
            <Helmet>
                <title>Products</title>
            </Helmet>

            <Container>
                <SidebarComponent activeKey="2-2" />
                    <Container>
                        <HeaderComponent/>
                            <Content className='container-content'>
                                <ProductTable/>
                            </Content >
                            <Content className='container-content'>
                                <p>Hello</p>
                            </Content>
                            <Content className='container-content'>
                                <p>Hello</p>
                            </Content>
                        <FooterComponent />
                    </Container>
            </Container>
        </> 
        )
}

export default ProductsComponent