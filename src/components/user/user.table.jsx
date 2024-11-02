
import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/apiService';
import { useState } from 'react';

const UserTable = () => {
    const [dataUser, serDataUser] = useState([
        {
            _id: "dat", fullName: 21, email: "thanhhoa"
        },
        {
            _id: "dat", fullName: 21, email: "thanhhoa"
        }
    ]);
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }
    ];

    const loadUser = async () => {
        console.log(">>> run render")
        const res = await fetchAllUserAPI()
        //serDataUser(res.data)
    }

    loadUser()

    return (
        <Table columns={columns} dataSource={dataUser} />
    )
}

export default UserTable;