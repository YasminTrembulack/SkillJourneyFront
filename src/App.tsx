import { Route, Routes } from "react-router-dom";
import "./styles/global.css"
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";

export default function App() {
  return (
    <>
      <LoginPage/>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>  
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>     
    </>
  )
}
