
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import UpdateUserModal from './update.user.modal';


const UserTable = (props) => {

    const { dataUser } = props;

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#'>{record._id}</a>
                )
            }
        },
        {
            title: 'Full name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined style={{ cursor: "pointer", color: "orange" }} />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                </div>
            ),
        },
    ];

    console.log(">>> run render 0")
    return (
        <>
            <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
            <UpdateUserModal />
        </>
    )
}

export default UserTable;