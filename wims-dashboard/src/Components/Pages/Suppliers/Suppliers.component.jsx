import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Container, Content } from 'rsuite';

import FooterComponent from '../../Layouts/Footer/footer.component';
import SidebarComponent from '../../Layouts/Navigation/sidebar.component';
import HeaderComponent from '../../Layouts/Header/header.component';

const SuppliersComponent = () => {
        return (
        <>
            <Helmet>
                <title>Suppliers</title>
            </Helmet>

            <Container>
                <SidebarComponent ActiveKey="3-1" />
                    <Container>
                        <HeaderComponent/>
                            <Content className='container-content'>
                                <h2>Suppliers</h2>
                            </Content>
                        <FooterComponent />
                    </Container>
            </Container>   
        </>
    )
}

export default SuppliersComponent