import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Container, Header, Sidebar, Sidenav, Content, Navbar, Nav, Input } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import DashboardIcon from '@rsuite/icons/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import 'rsuite/dist/rsuite.min.css';

const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};

//TODO move to top right of page.
const NavToggle = ({ expand, onChange }) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle">
            <Nav>
                <Nav.Menu
                    noCaret
                    placement="topStart"
                    trigger="click"
                    title={<CogIcon style={{ width: 20, height: 20 }} size="sm" />}
                >
                    <Nav.Item>Help</Nav.Item>
                    <Nav.Item>Settings</Nav.Item>
                    <Nav.Item>Sign out</Nav.Item>
                </Nav.Menu>
            </Nav>

            <Nav pullRight>
                <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                    {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};

const App = () => {
    const [expand, setExpand] = React.useState(true);
    return (
        <div className="show-fake-browser sidebar-page">
            <Container>
                <Sidebar
                    style={{ display: 'flex', flexDirection: 'column' }}
                    width={expand ? 260 : 56}
                    collapsible>

                    <Sidenav.Header>
                        <div style={headerStyles}>
                            <span style={{ marginLeft: 12 }}> WIMS</span>
                        </div>
                    </Sidenav.Header>
                    <Sidenav expanded={expand} defaultOpenKeys={['2','3']} appearance="subtle">
                        <Sidenav.Body>

                            <Nav>
                                <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                                    Dashboard
                                </Nav.Item>
                                <Nav.Menu
                                    eventKey="2"
                                    trigger="hover"
                                    title="Inventory"
                                    icon={<MagicIcon />}
                                    placement="rightStart">
                                    <Nav.Item eventKey="2-1">Thresholds</Nav.Item>
                                    <Nav.Item eventKey="2-2">All</Nav.Item>
                                </Nav.Menu>
                                <Nav.Menu
                                    eventKey="3"
                                    trigger="hover"
                                    title="Orders"
                                    icon={<GearCircleIcon />}
                                    placement="rightStart">
                                    <Nav.Item eventKey="3-1">Current</Nav.Item>
                                    <Nav.Item eventKey="3-2">Previous</Nav.Item>
                                </Nav.Menu>
                            </Nav>

                        </Sidenav.Body>
                    </Sidenav>
                    <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
                </Sidebar>

                <Container>
                    <Header>
                        <h4>Stock that needs replacing</h4>
                    </Header>
                    <Content>We need a count here.</Content>
                </Container>

                <Container>
                    <Header>
                        <h4>Stock that needs replacing</h4>
                    </Header>
                    <Content>We need a count here.</Content>
                </Container>
            </Container>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);