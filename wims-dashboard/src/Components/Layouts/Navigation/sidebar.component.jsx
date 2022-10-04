import { Sidenav, Nav, Toggle, Navbar, Sidebar, Icon } from 'rsuite';
import React, {Component} from 'react';
import { isMobile } from "react-device-detect";

import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import PageEndIcon from '@rsuite/icons/PageEnd';
import PageTopIcon from '@rsuite/icons/PageTop';

import NavigationComponent from "./navigation.component";

// Styles
const headerStyles = {
    padding: 18,
    fontSize: '1rem',
    height: '2rem',
    background: '#3326ae',
    color: '#fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textAlign: 'center'
};

const headerStylesSmall = {
    padding: 18,
    fontSize: '3rem',
    height: '5rem',
    background: '#3326ae',
    color: '#fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textAlign: 'center'
};

const divStyle ={
    width: 240,
    height: '100%',
    display: 'inline-table',
    marginRight: 10
};

const NavToggle = ({expand, onChange}) => {
    return(
        <Navbar>
            <Navbar.Brand>
                <Nav pullRight>
                    <Nav.Item onClick={onChange} icon={expand ? <PageTopIcon/> : <PageEndIcon/>}/>
                </Nav>
            </Navbar.Brand>
        </Navbar>
    )
}

class SidebarComponent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            expand: true,
            openKey: props.openKey || '',
            activeKey: props.activeKey || ''
        }

        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount() {
        if (isMobile) {
            this.setState({
                expand: false
            });
        }
    }

    handleToggle() {
        this.setState({
            expand: !this.state.expand
        })
    }

    render(){
        const { expand } = this.state;

        return (
            <div style={divStyle}>
                <Sidebar
                style={{ display: 'flex', flexDirection: 'column'}}
                width={expand ? '100%' : 56}
                collapsible
                >
                    <Sidenav.Header>
                        {!expand ? (
                            <div style={headerStyles}>
                                W
                            </div>
                        ) : (
                            <div style={headerStylesSmall}>
                                Wims
                            </div>
                        )}
                    </Sidenav.Header>
                    <Sidenav 
                        expanded={expand}
                        defaultOpenKeys={[`${this.state.openKey}`]}
                        activeKey={this.state.activeKey}
                    >
                        <NavigationComponent />
                    </Sidenav>
                    <NavToggle expand={expand} onChange={this.handleToggle} />
                </Sidebar>
            </div>
            
        )
    }
}

export default SidebarComponent 