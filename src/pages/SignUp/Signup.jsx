import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSignup = () => {
    axios
      .post("http://127.0.0.1:5000/signup", { username, password })
      .then(() => {
        nav("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box sx={{ width: "100%", margin: "0px" }}>
      <Grid
        margin="0px"
        container
        spacing={5}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "700px",
        }}
      >
        <Grid
          item
          sx={{
            maxWidth: "500px",
            fontSize: "1.5rem",
          }}
        >
          <h1>Sign up</h1>
        </Grid>
        <Grid item>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              width: { md: 300 },
              height: { md: 60 },
              borderRadius: "5px",
            }}
            id="outlined-basic"
            label="User name"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              width: { md: 300 },
              height: { md: 60 },
              borderRadius: "5px",
            }}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item>
          <Button
            onClick={handleSignup}
            variant="contained"
            sx={{
              width: { md: 300 },
              height: { md: 60 },
              color: "black",
              bgcolor: "#e0e0e0",
              border: 1,
            }}
          >
            Sign Up
          </Button>
        </Grid>
        <Grid
          item
          sx={{
            fontSize: "1.4rem",
          }}
        >
          <a href="/LogIn">Already registered</a>
        </Grid>
      </Grid>
    </Box>
  );
}
