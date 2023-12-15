import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Gọi API để thực hiện logout từ server
            await axios.post("http://localhost:8080/api/users/logout");

            // Điều hướng đến trang đăng nhập hoặc trang chính (tùy thuộc vào yêu cầu của bạn)
            navigate('/login');
        } catch (error) {
            console.error("Logout failed:", error);
            // Xử lý lỗi nếu cần
        }
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
