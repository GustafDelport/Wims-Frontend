import React, {Component} from 'react';
import {Container, Header, AvatarGroup, Avatar} from "rsuite";

function HeaderComponent(){
    return (
        <>
            <Header style={{textAlign: "left", display: "flex"}}>
                <h3 style={{marginLeft: 0}}>I am a header</h3>
                    <Avatar 
                        size='md'
                        circle
                        src="/Assets/Logo.png" 
                        alt="Wims"
                        style={{Margin: 5, marginRight:"5", marginLeft: "Auto"}} />
            </Header>
        </>
    )
}

export default HeaderComponent;