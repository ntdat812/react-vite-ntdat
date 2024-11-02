import { Button, Input } from "antd";
import { useState } from "react";
import axios from "axios";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [phone, setPhoneNumber] = useState("");

    const handleClickBtn = () => {
        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phone
        }
        axios.post(URL_BACKEND, data)
        console.log(">>check state: ", { fullName, email, password, phone });
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