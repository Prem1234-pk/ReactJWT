import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api/axios";

export default function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const handleLogin = async function (e) {
        e.preventDefault(); 
        try {
            const res = await api.post("/auth/login", { userName, password });
            localStorage.setItem("token", res.data.token);
            console.log("handleLogin");
            navigate("/");
            console.log("navigate");
        } catch (error) {
            setError(error);
            
        }
    }

    return (<div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <input value={userName} onChange={e => setUserName(e.target.value)} required />
            <br />
            <input value={password} onChange={e => setPassword(e.target.value)} required />
            <br />
            <button type="Submit">Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
    </div>)

}