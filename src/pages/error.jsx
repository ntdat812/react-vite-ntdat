// ErrorPage.jsx
import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import { Button, Result } from "antd";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/"); // Navigate to the home page
    };

    return (
        <Result
            status="404"
            title="404"
            subTitle={error?.statusText || error?.message}
            extra={<Button type="primary" onClick={goToHome}>Back Home</Button>}
        />
    );
}
