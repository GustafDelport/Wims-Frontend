import React, {Component} from 'react';
import {Nav, Sidenav, Icon} from "rsuite";

import DashboardIcon from '@rsuite/icons/Dashboard';

class NavigationComponent extends Component {
    render() {
        return (
            <Sidenav.Body>
                <Nav>
                    <Nav.Item eventKey="1" icon={<DashboardIcon/>} href="/">
                        Dashboard
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<DashboardIcon/>} href="/inventory">
                        Inventory
                    </Nav.Item>
                    <Nav.Item eventKey="3" icon={<DashboardIcon/>} href="/login">
                        Login
                    </Nav.Item>
                </Nav>
            </Sidenav.Body>
        );
    }
}

export default NavigationComponent;
