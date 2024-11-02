import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/apiService";


const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [phone, setPhoneNumber] = useState("");

    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Tạo mới user thành công!"
            })
        }

        console.log(">>res: ", res.data)
    }

    console.log("check fullname: ", fullName)
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div>
                    <span>Full name: </span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Email: </span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Pass Word: </span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassWord(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone Number: </span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhoneNumber(event.target.value) }}
                    />
                </div>
                <div>
                    <Button
                        type="primary"
                        onClick={handleClickBtn}
                    >Create user</Button >
                </div>
            </div>
        </div>
    )
}

export default UserForm;