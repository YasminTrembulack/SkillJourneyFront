import { Route, Routes, useLocation } from "react-router-dom";
import { LanguageProvider } from "./Context/language";
import LoginPage from "./Pages/LoginPage";
import TrainingPage from "./Pages/TrainingPage";
import RegisterPage from "./Pages/RegisterPage";
import SkillPage from "./Pages/SkillPage";
import TrainingDetailsPage from "./Pages/TrainingDetailsPage";
import SkillUserPage from "./Pages/SkillUserPage";
import EmployeePage from "./Pages/EmployeePage";
import ProfilePage from "./Pages/ProfilePage";
import { UserProvider } from "./Context/user";
import NavBarRole from "./Components/NavBarRole";
import HomePage from "./Pages/HomePage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../src/Styles/toaststyles.css';


export default function App() {

  const location = useLocation(); 
  const isLoginPage = location.pathname === '/';

  return (
    <>
      <UserProvider>
      <LanguageProvider>
        {!isLoginPage && <NavBarRole />}
        <Routes>
          <Route path="/" element={<LoginPage/>}/>  
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/training" element={<TrainingPage/>}/>
          <Route path="/training-details" element={<TrainingDetailsPage/>}/>
          <Route path="/employee" element={<EmployeePage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/skill" element={<SkillPage/>}/>
          <Route path="/skills-details" element={<SkillUserPage/>}/>
        </Routes>     
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </LanguageProvider>
      </UserProvider>
    </>
  )
}
