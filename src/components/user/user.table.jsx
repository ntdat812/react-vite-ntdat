
import { Table } from 'antd';
import { fetchAllUserAPI } from '../../services/apiService';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const [dataUser, serDataUser] = useState([
        { _id: "1", fullName: 21, email: "thanhhoa" },
        { _id: "2", fullName: 21, email: "thanhhoa" }
    ]);

    //truyen vao array rong chi chay 1 lan
    useEffect(() => {
        console.log("run useEffect 1")
        loadUser()
    }, [])

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

        const res = await fetchAllUserAPI()
        serDataUser(res.data)
    }


    console.log(">>> run render 0")
    return (
        <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
    )
}

export default UserTable;