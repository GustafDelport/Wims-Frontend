import React, {Component} from 'react';
import {Nav, Sidenav, Icon} from "rsuite";

import DashboardIcon from '@rsuite/icons/Dashboard';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import PeoplesIcon from '@rsuite/icons/Peoples';
import HistoryIcon from '@rsuite/icons/History';
import GearIcon from '@rsuite/icons/Gear';

class NavigationComponent extends Component {
    render() {
        return (
            <Sidenav.Body>
                <Nav>
                    <Nav.Item eventKey="1" icon={<DashboardIcon/>} href="/">
                        Dashboard
                    </Nav.Item>
                        <Nav.Menu placement="rightStart" eventKey="2" title="Inventory" icon={<MagicIcon />}>
                            <Nav.Item eventKey="2-1" href="/threshold">Thresholds</Nav.Item>
                            <Nav.Item eventKey="2-2" href="/Product">Manage Products</Nav.Item>
                            <Nav.Item eventKey="2-3" href="/Category">Manage Categories</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu placement="rightStart" eventKey="3" title="Suppliers" icon={<PeoplesIcon />}>
                            <Nav.Item eventKey="3-1" href="/Supplier">Manage Suppliers</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu placement="rightStart" eventKey="4" title="Orders" icon={<HistoryIcon />}>
                            <Nav.Item eventKey="4-1" href="/CurrentOrders">Current Orders</Nav.Item>
                            <Nav.Item eventKey="4-2" href="/PastOrders">Past Orders</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu placement="rightStart" eventKey="5" title="Settings" icon={<GearIcon />}>
                            <Nav.Item eventKey="5-1">General</Nav.Item>
                            <Nav.Item eventKey="5-2">User Settings</Nav.Item>
                        </Nav.Menu>
                </Nav>
            </Sidenav.Body>
        );
    }
}

export default NavigationComponent;
