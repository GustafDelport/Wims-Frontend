import {
    Container,
    Header,
    Content,
    Footer,
    Form,
    ButtonToolbar,
    Button,
    Navbar,
    Panel,
    FlexboxGrid
  } from 'rsuite';

import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem';
import FooterComponent from '../../Layouts/Footer/footer.component';


  const LoginComponent = () => {
        return(
            <>
                <Helmet>
                    <title>Login Page</title>
                </Helmet>
                <Container>
                    <Header>
                        <Navbar appearance='inverse'>
                            <Navbar.Brand>
                                
                            </Navbar.Brand>
                        </Navbar>
                    </Header>
                    <Content>
                        <FlexboxGrid justify='center'>
                            <FlexboxGridItem colspan={12}>
                                <Panel header={<h3>Login</h3>} bordered>
                                    <Form fluid>
                                        <Form.Group>
                                            <Form.ControlLabel>Email address</Form.ControlLabel>
                                            <Form.Control name='name' />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.ControlLabel>Password</Form.ControlLabel>
                                            <Form.Control name='password' type='password' autoComplete='off'/>
                                        </Form.Group>
                                        <Form.Group>
                                            <ButtonToolbar>
                                                <Button appearance='primary'>Sign In</Button>
                                                <Button appearance='link'>Forgot password</Button>
                                            </ButtonToolbar>
                                        </Form.Group>
                                    </Form>
                                </Panel>
                            </FlexboxGridItem>
                        </FlexboxGrid>
                    </Content>
                    <FooterComponent/>
                </Container>
            </>
        )
  }

  export default LoginComponent
