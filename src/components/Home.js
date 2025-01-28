import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation(); 
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Techerudite
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "15px" }}>
              <Link to="/register">Register</Link>
              <Link to="/admin-login">Login</Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {location.pathname === "/" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 64px)",
          }}
        >
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: 900,
            }}
          >
            Welcome
          </Typography>
        </Box>
      )}
    </>
  );
}

export default Home;
