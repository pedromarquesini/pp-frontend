import { useEffect } from "react";
import SentMail from "../../components/SentMail";
import {Sidebar} from "../../components/Sidebar/Sidebar";
import "../../styles/animations.css";
import { useNavigate } from "react-router-dom";

export default function SentPage() {

    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="flex  min-w-0 p-3 bg-animated-black-ct ">
            <Sidebar SentChecked={true} />
            <main className="flex-1 p-4 w-full max-w-full overflow-x-hidden md:ml-64 bg-white rounded-2xl shadow-md ">
                <span className="flex justify-center items-center w-full mb-2">
                    <h1 className="text-2xl font-bold text-gray-800">Enviados</h1>
                </span>
                <SentMail
                    emailSentTo="joaodasilva@gmail.com"
                    title="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    viewed={false}                
                />

                <SentMail
                    emailSentTo="fulanodetals@gmail.com"
                    title="Email de teste"
                    viewed={true}                
                />
            </main>
        </div>
    );
}