// ErrorPage.jsx
import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import "./error.css";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/"); // Navigate to the home page
    };

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.statusText || error?.message}</i>
            </p>
            <button onClick={goToHome} className="back-home-button">
                Back to Home
            </button>
        </div>
    );
}
