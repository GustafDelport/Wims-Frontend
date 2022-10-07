import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Container, Content } from 'rsuite';

import FooterComponent from '../../Layouts/Footer/footer.component';
import SidebarComponent from '../../Layouts/Navigation/sidebar.component';
import HeaderComponent from '../../Layouts/Header/header.component';

const ThresholdsComponent = () =>{
        return (
        <>
            <Helmet>
                <title>Thresholds</title>
            </Helmet>

            <Container>
                <SidebarComponent activeKey="2-1" />
                    <Container>
                        <HeaderComponent/>
                            <Content className='container-content'>
                                <h2>Thresholds</h2>
                            </Content>
                        <FooterComponent />
                    </Container>
            </Container>
        </> 
        )
}

export default ThresholdsComponent