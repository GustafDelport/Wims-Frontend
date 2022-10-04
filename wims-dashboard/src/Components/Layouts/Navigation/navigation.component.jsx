import React, {Component} from 'react';
import {Nav, Sidenav, Icon} from "rsuite";

import DashboardIcon from '@rsuite/icons/Dashboard';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import PeoplesIcon from '@rsuite/icons/Peoples';
import HistoryIcon from '@rsuite/icons/History';

class NavigationComponent extends Component {
    render() {
        return (
            <Sidenav.Body>
                <Nav>
                    <Nav.Item eventKey="1" icon={<DashboardIcon/>} href="/">
                        Dashboard
                    </Nav.Item>
                        <Nav.Menu placement="rightStart" eventKey="2" title="Inventory" icon={<MagicIcon />}>
                            <Nav.Item eventKey="2-1" href="/inventory">Thresholds</Nav.Item>
                            <Nav.Item eventKey="2-2">Manage Products</Nav.Item>
                            <Nav.Item eventKey="2-3">Manage Categories</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu placement="rightStart" eventKey="3" title="Suppliers" icon={<PeoplesIcon />}>
                            <Nav.Item eventKey="3-1">Manage Suppliers</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu placement="rightStart" eventKey="4" title="Orders" icon={<HistoryIcon />}>
                            <Nav.Item eventKey="4-1">Current Orders</Nav.Item>
                            <Nav.Item eventKey="4-2">Past Orders</Nav.Item>
                        </Nav.Menu>
                </Nav>
            </Sidenav.Body>
        );
    }
}

export default NavigationComponent;
