import React from 'react';
import {Container, Header, Avatar, Input, InputGroup} from "rsuite";
import SearchIcon from '@rsuite/icons/Search';

const styles = {
    width: '50%',
    marginBottom: 10,
    marginTop: 5
  };

function HeaderComponent(){
    return (
        <Header style={{textAlign: "left", display: "flex"}}>
            <InputGroup style={styles}>
                <Input />
                <InputGroup.Button>
                    <SearchIcon />
                </InputGroup.Button>
            </InputGroup>
            <Avatar 
                size='md'
                circle
                src="/Assets/Logo.png" 
                alt="Wims"
                style={{Margin: 5, marginRight:"5", marginLeft: "Auto"}} />
        </Header>
    )
}

export default HeaderComponent;