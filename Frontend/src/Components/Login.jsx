import React from "react";
import { Button, Box } from "@mui/material";
import Google from "@mui/icons-material/Google";
import {useGoogleLogin} from "@react-oauth/google"
import { useNavigate } from "react-router";
import toast from "react-hot-toast"
import {useAuth} from "../Helper/AuthContext"
function Login() {
  const {token, loginUser} = useAuth();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    scope:'https://www.googleapis.com/auth/youtube.upload',
    onSuccess:(response) => {
      console.log(response)
      loginUser(response.access_token)
      navigate('/dashboard/upload')
    },
    onError:(error)=> {
      toast.error("Login error")
      console.log(error)
    }
  })

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
      <Button startIcon={<Google />} variant="contained" size="large" onClick={login} >
        Log in with Google
      </Button>
    </Box>
  );
}

export default Login;
