import React from "react";
import { Button, Box } from "@mui/material";
import Google from "@mui/icons-material/Google";

function Login() {
  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Button startIcon={<Google />} variant="contained" size="large" onClick={()=> {
        alert("try to login with third party authentications.")
      }} >
        Log in with Google
      </Button>
    </Box>
  );
}

export default Login;
