import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ViewEmail from "../pages/ViewEmail";
import NewEmail from "../pages/NewEmail";
import Profile from "../pages/Profile";
import SentPage from "../pages/SentPage";


export function UserRoutes() {
    return (
        <Routes>            
            <Route path="/main" element={<MainPage />} />
            <Route path="/email/:emailId" element={<ViewEmail />} />
            <Route path="/new-email" element={<NewEmail/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/sent" element={<SentPage/>} /> 

            <Route path="*" element={<Navigate to="/main" replace/>} />
        </Routes>
    );
}