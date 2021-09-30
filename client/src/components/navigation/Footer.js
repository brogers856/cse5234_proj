import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { Contact } from '../../components';
import {
    HomeOutlined,
    ShoppingOutlined,
} from "@ant-design/icons";

const { Item } = Menu;

const Footer = () => {
    return (
        <Menu mode="horizontal">
            <Item key="contact-us" icon={<HomeOutlined />} style={{ float: 'left' }}>
                <Contact />
            </Item>

            <Item key="/about" icon={<ShoppingOutlined />} style={{ float: 'left' }}>
                <Link to='/about'>About Us</Link>
            </Item>
        </Menu>
    )
}

export default Footer;