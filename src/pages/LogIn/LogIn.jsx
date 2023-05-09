import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function LogIn() {
  return (
    <Box sx={{ width: "100%", border: "1px solid red", margin: "0px" }}>
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
          <h1>Login</h1>
        </Grid>
        <Grid item>
          <TextField
            sx={{
              width: { md: 300 },
              height: { md: 60 },
              border: 1,
              borderRadius: "5px",
            }}
            id="outlined-basic"
            label="User name"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            sx={{
              width: { md: 300 },
              height: { md: 60 },
              border: 1,
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
            variant="contained"
            sx={{
              width: { md: 300 },
              height: { md: 60 },
              color: "black",
              bgcolor: "#e0e0e0",
              border: 1,
            }}
          >
            Login
          </Button>
        </Grid>
        <Grid
          item
          sx={{
            fontSize: "1.4rem",
          }}
        >
          <a href="/LogIn">Forgot Username / Password</a>
        </Grid>
      </Grid>
    </Box>
  );
}
