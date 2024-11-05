import { Link, NavLink } from 'react-router-dom';
import { BookOutlined, HomeOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';


//import './header.css'
const Header = () => {
    const [current, setCurrent] = useState('');

    const { user } = useContext(AuthContext)

    console.log(">>check data: ", user)

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}> Users</Link>,
            key: 'users',
            icon: <UserOutlined />,
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <BookOutlined />,

        },
        {
            label: 'Cài đặt',
            key: 'setting',
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to={"/login"}> Đăng nhập</Link>,
                    key: 'login',
                },
                {
                    label: <Link to={"/register"}>Đăng ký</Link>,
                    key: 'register',
                },
            ],

        },
    ];
    return (<Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items} />)

}

export default Header;