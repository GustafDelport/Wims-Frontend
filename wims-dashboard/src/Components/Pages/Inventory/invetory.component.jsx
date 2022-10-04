import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Container, Content } from 'rsuite';

import FooterComponent from '../../Layouts/Footer/footer.component';
import SidebarComponent from '../../Layouts/Navigation/sidebar.component';

class DummyComponent extends Component{
    render() {
        return (
            <>
                <Helmet>
                    <title>Inventory</title>
                </Helmet>
                <Container>
                    <SidebarComponent activeKey="2" />
                    <Container className='container-content'>
                        <h2>Inventory</h2>
                    </Container>
                </Container>
                <FooterComponent />
            </>
            
        )
    }
}

export default DummyComponent