import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
    UserAddOutlined,
    UserOutlined,
    ShoppingOutlined,
    SettingOutlined,
    ShoppingCartOutlined
} from "@ant-design/icons";
import { useHistory } from "react-router";


const { SubMenu, Item } = Menu;

const Header = () => {
    let history = useHistory();

    const [current, setCurrent] = useState('/');

    const handleClick = (event) => {
        setCurrent(event.key);
    };

    let href=window.location.href.split('/')
    href = href[3]
    return (
        <Menu  onClick={handleClick} defaultSelectedKeys={['/'+href]} selectedKeys={['/'+href]} mode="horizontal">
            <Item key="/" icon={<ShoppingOutlined />} style={{ float: 'left' }}>
                <Link to='/'>Home</Link>
            </Item>

            <Item key="/cart" icon={<ShoppingCartOutlined />} style={{ float: 'left' }}>
                <Link to='/cart'>My Cart</Link>
            </Item>

            <SubMenu key="account" icon={<SettingOutlined />} title="My Account" style={{ float: 'left' }}>
                <Item key="setting:1">Option 1</Item>
                <Item key="setting:2">Option 2</Item>
            </SubMenu>

            <Item key="signup" icon={<UserAddOutlined />} style={{ float: 'right' }}>
                Sign Up
            </Item>

            <Item key="login" icon={<UserOutlined />} style={{ float: 'right' }}>
                Login
            </Item>
        </Menu>
    )
};

export default Header;