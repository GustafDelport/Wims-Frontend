import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Container, Content } from 'rsuite';

import FooterComponent from '../../Layouts/Footer/footer.component';
import SidebarComponent from '../../Layouts/Navigation/sidebar.component';
import HeaderComponent from '../../Layouts/Header/header.component';

const DashboardComponent = () => {
        return (
            <>
                <Helmet>
                    <title>Wims Dashboard</title>
                </Helmet>

                <Container>
                    <SidebarComponent activeKey="1"/>
                        <Container>
                            <HeaderComponent/>
                            <Content className='container-content'>
                                <h2>Dashboard</h2>
                            </Content>
                            <FooterComponent />
                        </Container>
                </Container>
            </>
        )
}

export default DashboardComponent