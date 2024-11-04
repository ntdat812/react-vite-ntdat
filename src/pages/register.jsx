import { Button, Col, Form, Input, notification, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { registerUserAPI } from "../services/apiService";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log("check values: ", values)

        const res = await registerUserAPI(values.fullName, values.email, values.password, values.phone);
        if (res.data) {
            notification.success({
                message: "Register user",
                description: "Đăng ký người dùng thành công!"
            })
            navigate("/login");
        } else {

            notification.error({
                message: "Register user",
                description: JSON.stringify(res.message)
            })
        }
    }

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            style={{ margin: "15px" }}
        //onFinishFailed={onFinishFailed}
        >

            <Row justify={"center"}>
                <Col md={6} xs={24} >
                    <Form.Item
                        label="Full name: "
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Full name không được để trống!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col md={6} xs={24}>
                    <Form.Item
                        label="Email: "
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Email không được để trống!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col md={6} xs={24}>
                    <Form.Item
                        label="Pass word"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Pass word không được để trống!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col md={6} xs={24}>
                    <Form.Item
                        label="Phone number"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                pattern: new RegExp(/\d+/g),
                                message: "Không đúng định dạng!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col md={6} xs={24}>
                    <div>
                        <Button
                            onClick={() => form.submit()}
                            //htmlType="submit" 
                            type="primary">Register</Button>
                    </div>
                </Col>
            </Row>

        </Form >
    )
}

export default RegisterPage;