import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SentPage from "../pages/SentPage";
import MainPage from "../pages/MainPage";
import ViewEmail from "../pages/ViewEmail";
import NewEmail from "../pages/NewEmail";
import Profile from "../pages/Profile";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />    
            <Route path="/main" element={<MainPage />} />
            <Route path="/email" element={<ViewEmail/>} />
            <Route path="/new-email" element={<NewEmail/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/sent" element={<SentPage/>} />        

            <Route path="*" element={<Login />} />
        </Routes>
    );
}