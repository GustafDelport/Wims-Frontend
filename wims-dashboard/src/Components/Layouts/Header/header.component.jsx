import React, {Component} from 'react';
import {Container, Header, AvatarGroup, Avatar} from "rsuite";

class HeaderComponent extends Component{
    render() {
        return (
            <>
                <Header style={{textAlign: "right"}}>
                    <Avatar 
                        size='md'
                        circle
                        src="/Assets/Logo.png" 
                        alt="Wims"
                        style={{Margin: 5}} />
                </Header>
            </>
        )
    }
}

export default HeaderComponent;