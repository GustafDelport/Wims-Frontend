import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Container, Content } from 'rsuite';

import FooterComponent from '../../Layouts/Footer/footer.component';
import SidebarComponent from '../../Layouts/Navigation/sidebar.component';
import HeaderComponent from '../../Layouts/Header/header.component';

class PastOrdersComponent extends Component{
    render() {
        return (
            <>
                <Helmet>
                    <title>Past Orders</title>
                </Helmet>

                <Container>
                    <SidebarComponent activeKey="4-2" />
                        <Container>
                            <HeaderComponent/>
                            <Content className='container-content'>
                                <h2>Past Orders</h2>
                            </Content>
                            <FooterComponent />
                        </Container>
                </Container>
                
            </>
            
        )
    }
}

export default PastOrdersComponent