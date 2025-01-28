import React, { useState } from "react";
import { Container, TextField, Button, Typography, Select, MenuItem, Alert } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ first_name: "", last_name: "", email: "", password: "", role: "customer" });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError(""); 
        try {
            const response = await axios.post("http://localhost:5000/auth/register", user);
            setMessage(response.data.message || "Registered successfully!");
            setUser({ first_name: "", last_name: "", email: "", password: "", role: "customer" });
            setTimeout(() => {
                navigate("/admin-login");
            }, 2000); 
        } catch (err) {
            setError(err.response?.data?.message || "An unexpected error occurred");
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" sx={{color:"#fff",opacity:0.7, my: 2, fontWeight:800, textAlign:"center"}}>Register</Typography>
            {message && <Alert severity="success" sx={{ mb: 2 }}>{message}</Alert>}
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="First Name"
                    name="first_name"
                    value={user.first_name}
                    onChange={handleChange}
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="Last Name"
                    name="last_name"
                    value={user.last_name}
                    onChange={handleChange}
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                    sx={{ mb: 2 }}
                />
                <Select
                    fullWidth
                    name="role"
                    value={user.role}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                >
                    <MenuItem value="customer">Customer</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                </Select>
                <Button fullWidth variant="contained" sx={{backgroundColor:"#56a693"}} color="primary" type="submit">Register</Button>
            </form>
        </Container>
    );
};

export default Register;
