import "./style.css";
import logo from "../../assets/ct-junior-black-orange.svg";
import Card from "../card";
import { PaperPlaneTiltIcon, MailboxIcon, PlusIcon, UserIcon, SignOutIcon } from "@phosphor-icons/react";


interface SidebarProps {
    userInfo?: { name: string; email: string; avatar?: typeof Image };
    className?: string;
}

export function Sidebar({ userInfo, className }: SidebarProps) {

        function navigator(path: string) {
            window.location.href = path;
        }

        return (
            <>                
                    <div className={' bg-white border border-b-gray-300 max-w-xs rounded-2xl p-3 shadow-md' + className}>                
                        <div className="logo-container justify-center items-center flex mb-4 p-3">
                            <img src={logo} alt="Logo" className="max-w-80" />
                        </div>                                        
                        <nav className="gap-2">
                            <Card title="Novo Email" className="bg-amber-600 rounded-2xl p-2" icon={PlusIcon} />
                            <Card title="Entrada" icon={MailboxIcon}  />
                            <Card title="Enviados"  icon={PaperPlaneTiltIcon} />
                            <Card title="Editar perfil"  icon={UserIcon} />
                            <Card title="Sair" className="hover:bg-red-400" onClick={()=>{navigator("/login")}} icon={SignOutIcon} colorIcon="red" />
                        </nav>
                        <div className="flex flex-row gap-2 items-center mt-auto">
                            <img src={userInfo?.avatar || "https://via.placeholder.com/40"} alt="Avatar" className="rounded-full w-10 h-10" />                     
                            <p className="text-lg font-medium">{userInfo?.name || "Usuário"}</p>       
                        </div>
                    </div>
                    
            </>
    );
    
}