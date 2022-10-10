import React, {Component} from 'react';
import {Container, Content, Divider, Header} from "rsuite";
import {Helmet} from "react-helmet";

import SidebarComponent from "../../Layouts/Navigation/sidebar.component";
import FooterComponent from "../../Layouts/Footer/footer.component";

function NotFoundComponent(){
    return (
    <>
        <Helmet>
            <title>Not Found</title>
        </Helmet>
        <Container>
            <Container className="container-content">
                <Header style={{textAlign: "center"}}>
                    <h2>404</h2>
                </Header>
                <Divider />
                <Content>
                    <div className="content-inner">
                        <div>
                            <h4 style={{textAlign: "center"}}>This page is lost</h4>
                        </div>
                    </div>
                </Content>
                <FooterComponent />
            </Container>
        </Container>
    </>
        
    );
}

export default NotFoundComponent;
