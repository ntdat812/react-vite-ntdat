import { Button, Input } from "antd";
import { useState } from "react";


const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleClickBtn = () => {
        console.log(">>check state: ", { fullName, email, passWord, phoneNumber });
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
                        value={passWord}
                        onChange={(event) => { setPassWord(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone Number: </span>
                    <Input
                        value={phoneNumber}
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