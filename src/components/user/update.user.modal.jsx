import { useState } from "react";
import { Button, Input, Modal, notification } from "antd";
import { createUserAPI } from "../../services/apiService";

const UpdateUserModal = () => {
    //const { loadUser } = props;
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [phone, setPhoneNumber] = useState("");

    const [isModalOpen, setIsModelOpen] = useState(true)

    const handelSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {

            notification.success({
                message: "Create user",
                description: "Tạo mới user thành công!"
            });
            resetAndCloseModal();
            //await loadUser();
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModal = () => {
        setFullName("");
        setEmail("");
        setPassWord("");
        setPhoneNumber("");
        setIsModelOpen(false);
    }

    return (
        <Modal
            title="Update user"
            open={isModalOpen}
            onOk={() => handelSubmitBtn()}
            onCancel={() => setIsModelOpen(false)}
            maskClosable={false} //click ra ngoai cung khong dong modal
            okText="SAVE"
        >
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
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
            </div>
        </Modal>
    )
}

export default UpdateUserModal;