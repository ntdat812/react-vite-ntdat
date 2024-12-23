import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AliwangwangOutlined, BookOutlined, HomeOutlined, LoginOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, message } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { logoutAPI } from '../../services/apiService';


//import './header.css'
const Header = () => {
    const navigate = useNavigate();

    const [current, setCurrent] = useState('');

    const { user, setUser } = useContext(AuthContext)

    const handleLogout = async () => {
        const res = await logoutAPI();
        if (res.data) {
            //clear data
            localStorage.removeItem("access_token")
            setUser({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: ""
            })
            message.success("Đăng xuất thành công!")
            navigate("/")
        }
    }

    const onClick = (e) => {
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
        ...(!user.id ? [{
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />,

        }] : [{
            label: `Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: <span onClick={() => handleLogout()} > Đăng xuất</span >,
                    key: 'login',
                },
            ],

        },])
    ];
    return (<Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items} />)

}

export default Header;