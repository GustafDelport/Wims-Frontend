import React from 'react';

import { Sidenav, Nav, Sidebar } from 'rsuite';
import DashboardIcon from '@rsuite/icons/Dashboard';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import PeoplesIcon from '@rsuite/icons/Peoples';
import HistoryIcon from '@rsuite/icons/History';
import GearIcon from '@rsuite/icons/Gear';

const headerStyles = {
    padding: 18,
    fontSize: '1rem',
    height: '2rem',
    // background: '#3326ae',
    color: '#fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textAlign: 'center'
};

const headerStylesSmall = {
    padding: 18,
    fontSize: '3rem',
    height: '5rem',
    // background: '#3326ae',
    color: '#fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textAlign: 'center'
}; 

const divStyle = {
    height: '100%',
    display: 'inline-table',
    marginRight: 10
}

const SidebarComponent = () =>{
    const [expanded, setExpanded] = React.useState(true);
    const [activeKey, setActiveKey] = React.useState('1');
    return(
        <>
        <div style={divStyle}>
            <Sidebar 
            style={{display: 'flex', flexDirection: 'column', height: '100%'}}
            width={expanded ? 260 : 56}
            collapsible>
            <Sidenav expanded={expanded} defaultOpenKeys={['2','3', '4']}>
                <Sidenav.Header>
                    {!expanded ? (
                        <div style={headerStyles}>
                            W
                        </div>
                    ) : (
                        <div style={headerStylesSmall}>
                            Wims
                        </div>
                    )}
                </Sidenav.Header>

                <Sidenav.Body>
                <Nav activeKey={activeKey} onSelect={setActiveKey}>
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
                <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
            </Sidenav>
            </Sidebar>
        </div>
            
        </>
    )
} 

export default SidebarComponent 