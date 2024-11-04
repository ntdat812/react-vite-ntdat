import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, message, notification, Row } from "antd"
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/apiService";
import { useState } from "react";


const LoginPage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true)
        const res = await loginAPI(values.email, values.password);
        if (res.data) {
            message.success("Đăng nhập thành công!")
            navigate("/")
        } else {
            notification.error({
                message: "Đăng nhập thất bại!",
                description: JSON.stringify(res.message)
            })

        }
        setLoading(false)
    }

    return (
        <Row justify={"center"} style={{ margin: "30px" }}>
            <Col xs={24} md={16} lg={8} >
                <fieldset
                    style={{
                        padding: "15px",
                        border: "1px solid #ccc",
                        margin: "15px",
                        borderRadius: "5px"
                    }}>
                    <legend style={{ font: "16px", color: "black", fontWeight: "bold" }}>Đăng Nhập</legend>
                    <Form
                        form={form}
                        //form={form}
                        layout="vertical"
                        style={{ margin: "30px" }}
                        onFinish={onFinish}
                    //onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Không được để trống email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Không được để trống password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Button
                                    loading={loading}
                                    onClick={() => form.submit()}
                                    type="primary"
                                //htmlType="submit"
                                >
                                    Đăng nhập
                                </Button>
                                <Link to={"/"}>Go to home page <ArrowRightOutlined /></Link>
                            </div>

                        </Form.Item>

                        <Divider />

                        <div >
                            <p style={{ textAlign: "center" }} >Chưa có tài khoản? <Link to={"/register"}>Đăng ký tại đây</Link> </p>
                        </div>
                    </Form >
                </fieldset >
            </Col>
        </Row>
    )
}

export default LoginPage;