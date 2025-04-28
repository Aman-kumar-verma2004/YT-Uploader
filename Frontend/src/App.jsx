import Home from "./Components/Home";
import Login from "./Components/Login";
import Upload from "./Components/Upload";

import { BrowserRouter, Route, Routes, Navigate } from "react-router";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import './index.css'
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { darkTheme } from "./Helper/Theme";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./Helper/AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Toaster /> 
      <BrowserRouter>
        <Routes>
        <Route path="" element={<Navigate to={ "/Login"} />} />
          <Route path="/dashboard" element={<Home />}>
         
          <Route path="upload" element={<Upload />} />
          <Route path="list" element={<h1>This is a List page</h1>} />
          </Route>
          <Route path="/login" element={<Login />} />
          
          
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
