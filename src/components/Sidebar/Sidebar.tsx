import "./style.css";
import logo from "../../assets/ct-junior-black-orange.svg";
import Card from "../card";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {PaperPlaneTiltIcon, MailboxIcon, PlusIcon, UserIcon, SignOutIcon, ListIcon, XIcon } from "@phosphor-icons/react";


interface SidebarProps {
    userInfo?: { name: string; email: string; avatar?: typeof Image };
    className?: string;
    EntranceChecked?: boolean;
    SentChecked?: boolean;
    ProfileChecked?: boolean;
}

export function Sidebar({ userInfo, className, EntranceChecked=false, SentChecked=false, ProfileChecked=false }: SidebarProps) {

        function navigator(path: string) {
            window.location.href = path;
        }
        const [isOpen, setIsOpen] = useState(false);
        const location = useLocation();
        return (
            <>               
                    <button
                        onClick={()=> setIsOpen(!isOpen)}
                        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
                        aria-label={isOpen ? "Fechar" : "Abrir menu"}
                    >
                        {isOpen ? <XIcon className="h-6 w-6" weight="bold" /> : 
                        <ListIcon className="h-6 w-6" weight="bold" />}
                    </button>

                    {isOpen && (
                        <div className="fixed inset-0 z-40 " onClick={()=> setIsOpen(false)}></div>
                    )}

                    <aside className={`
                        fixed top-1/2 left-2 z-50 -translate-y-1/2
                        bg-white border border-gray-200 shadow-md
                        w-64 h-[80vh] rounded-2xl p-3 flex flex-col
                        transition-transform duration-300 ease-in-out
                        ${isOpen ? "translate-x-0" : "-translate-x-full"}
                        md:translate-x-0
                        opacity-95
                        ${className}                        
                        `}>                
                        <div className="justify-center items-center flex mb-4 p-3">
                            <img src={logo} alt="Logo" className="" />
                        </div>          

                        <nav className="flex flex-col gap-2 p-2 lg:p-4" onClick={()=> setIsOpen(false)}>
                            <Card title="Novo Email" className="bg-amber-600 rounded-2xl p-2" icon={PlusIcon} />
                            <Card title="Entrada" icon={MailboxIcon} checked={EntranceChecked} />
                            <Card title="Enviados"  icon={PaperPlaneTiltIcon} checked={SentChecked} />
                            <Card title="Editar perfil"  icon={UserIcon} checked={ProfileChecked} />
                            <Card title="Sair" className="hover:bg-red-400" onClick={()=>{navigator("/login")}} icon={SignOutIcon} colorIcon="red" />
                        </nav>

                        <div className="flex flex-row gap-2 items-center mt-auto">
                            <img src={userInfo?.avatar || "https://via.placeholder.com/40"} alt="Avatar" className="rounded-full w-10 h-10" />                     
                            <p className="text-lg font-medium truncate">{userInfo?.name || "Usuário"}</p>       
                        </div>
                    </aside>
                    
            </>
    );
    
}