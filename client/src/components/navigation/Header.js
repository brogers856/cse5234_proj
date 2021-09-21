import React, {useState} from 'react';
import {Menu} from 'antd';
import {
    UserAddOutlined,
    UserOutlined,
    ShoppingOutlined,
    SettingOutlined
} from "@ant-design/icons";

const {SubMenu, Item} = Menu;

const Header= () => {
    const [current, setCurrent] = useState('home');

    const handleClick = (event) => {
        setCurrent(event.key);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Item key="home" icon={<ShoppingOutlined />} style={{float: 'left'}}>
                Home
            </Item>

            <SubMenu icon={<SettingOutlined />} title="My Account" style={{float: 'left'}}>
                <Item key="setting:1">Option 1</Item>
                <Item key="setting:2">Option 2</Item>
            </SubMenu>
            
            <Item key="signup" icon={<UserAddOutlined />} style={{float: 'right'}}>
                
                Sign Up
            </Item>

            <Item key="login" icon={<UserOutlined />} style={{float: 'right'}}>
                Login
            </Item>
           
            
      </Menu>
    )
};

export default Header;