import React, { useEffect, useState } from "react";
import api from './api/axios'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState("");
  const [err,setErr] = useState(false);
    const navigate = useNavigate();
  useEffect(() => {
    api.get("/classs/get/1")
      .then(res => setData(res.data))
      .catch(err => setErr(true));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  if(err){
    navigate("/login");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Protected Home Page</h1>
      <p>Server response: {JSON.stringify(data)}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}