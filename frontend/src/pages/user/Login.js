import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
	const navigate = useNavigate();

    const handleLogin = () => {
        axios.post("http://localhost:8080/api/users/login", {
            fullname: fullname,
            password: password,
        })
        .then(response => {
            if (response.status === 200) {
                alert("Login successful");
				navigate('/');
            } else {
                alert("Login failed");
            }
        })
        .catch(error => {
            console.error("Login failed:", error);
            alert("Login failed");
        });
		
    };

    return (
        <section class="section-content padding-y">
		<div class="card mx-auto" style={{ width: '520px' }} >
			<article class="card-body">
				<header class="mb-4"><h4 class="card-title">Sign up</h4></header>
                <form class="form-row">
                <div>
            <label>Fullname:</label>
            <input required="name"
						class="form-control"
							type="fullname"
							placeholder="Fullname"
							value={fullname}
							onChange={(e) => setFullname(e.target.value)}
						/>

            <label>Password:</label>
            <input required="password"
						class="form-control"
							type="password"
							placeholder="Mật khẩu"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

<button    onClick={handleLogin} type="submit" class="btn btn-primary btn-block"> Login  </button>
<a
                 
                  href="/register"
                 
                >
                 Register
                </a>
        </div>
       
                </form>
				
			</article>
		</div>
		

		</section>
        
    );
};

export default Login;
