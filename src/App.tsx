import { Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./Context/language";
import LoginPage from "./Pages/LoginPage";
import TrainingPage from "./Pages/TrainingPage";
import RegisterPage from "./Pages/RegisterPage";
import SkillPage from "./Pages/SkillPage";
import TrainingDetailsPage from "./Pages/TrainingDetailsPage";


export default function App() {
  return (
    <>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>  
          <Route path="/training" element={<TrainingPage/>}/>
          <Route path="/training-details" element={<TrainingDetailsPage/>}/>
          {/* <Route path="/home" element={<HomePage/>}/> */}
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/skill" element={<SkillPage/>}/>
        </Routes>     
      </LanguageProvider>
    </>
  )
}
