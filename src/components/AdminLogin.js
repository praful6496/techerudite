import { useState } from "react";
import { TextField, Button, Container, Typography, Alert } from "@mui/material";
import axios from "axios";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "", role: "admin" });
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [message, setMessage] = useState(""); 
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/auth/admin-login", credentials);
      setMessage(response.data.message || "Login successful");
      setIsLoggedIn(true); 
    } catch (err) {
      setError(err.response?.data?.message || "An unexpected error occurred");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{color:"#fff",opacity:0.7, my: 2, fontWeight:900, textAlign:"center" }}>Admin Login</Typography>
      {isLoggedIn && <Alert severity="success" sx={{ mb: 2 }}>{message}</Alert>}
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {!isLoggedIn && (
        <form onSubmit={handleLogin}>
          <TextField
            sx={{ mb: 2 }}
            label="Email"
            fullWidth
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
          <TextField
            sx={{
            mb: 2,
            }}
            label="Password"
            type="password"
            fullWidth
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <Button fullWidth type="submit" sx={{backgroundColor:"#56a693"}} variant="contained">Login</Button>
        </form>
      )}
    </Container>
  );
};

export default AdminLogin;
