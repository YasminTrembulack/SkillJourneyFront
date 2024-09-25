import { Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./Context/language";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import SkillPage from "./Pages/SkillPage";


export default function App() {
  return (
    <>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>  
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/skill" element={<SkillPage/>}/>
        </Routes>     
      </LanguageProvider>
    </>
  )
}
