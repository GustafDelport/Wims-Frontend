import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Container, Content } from 'rsuite';

import FooterComponent from '../../Layouts/Footer/footer.component';
import SidebarComponent from '../../Layouts/Navigation/sidebar.component';

class DashboardComponent extends Component{
    render() {
        return (
            <>
                <Helmet>
                    <title>Wims Dashboard</title>
                </Helmet>

                <Container>
                    <SidebarComponent activeKey="1" />
                        <Container>
                            <Header>Header</Header>
                            <Content className='container-content'>
                                <h2>Hello</h2>
                            </Content>
                            <FooterComponent />
                        </Container>
                </Container>
            </>
        )
    }
}

export default DashboardComponent