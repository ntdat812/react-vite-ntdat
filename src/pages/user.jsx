import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from "../services/apiService";


const UserPage = () => {
    const [dataUser, serDataUser] = useState([]);

    //truyen vao array rong chi chay 1 lan
    useEffect(() => {
        console.log("run useEffect 1")
        loadUser()
    }, [])

    const loadUser = async () => {

        const res = await fetchAllUserAPI()
        serDataUser(res.data)
    }
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUser={dataUser} loadUser={loadUser} />
        </div>


    )
}

export default UserPage;