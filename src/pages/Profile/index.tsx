import { InputField } from "../../components/InputField";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { PencilIcon, UserIcon } from "@phosphor-icons/react";

import "../../styles/animations.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";


export default function Profile() {

    const navigate = useNavigate();

    const [linkPhoto, setLinkPhoto] = useState("");
    const [editName, setEditName] = useState("");

    const context = useAuth();
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, []);

    async function onActionPhoto(linkPhoto: string) {
        

        try{
            const data = {
                linkPhoto: linkPhoto,
            }

            await api.patch("/my-image", data).then((response) => {
                alert("Foto alterada com sucesso!");
                navigate("/profile");
            }).catch((error) => {
                console.error(error);
                alert("Ocorreu um erro ao alterar a foto do perfil. Por favor, tente novamente.");
            });
        } catch (error) {
            console.error(error);
            alert("Ocorreu um erro ao alterar a foto do perfil. Por favor, tente novamente.");
        }
    }

    async function onActionName(editName: string) {
        
        try{
            const data = {
                nome: editName,
            }
            await api.patch("/my-name", data).then((response) => {
                alert("Nome alterado com sucesso!");
                navigate("/profile");
            }).catch((error) => {
                console.error(error);
                alert(Response.error || "Ocorreu um erro ao alterar o nome do perfil. Por favor, tente novamente.");
            });
        } catch (error) {
            console.error(error);
            alert(Response.error || "Ocorreu um erro ao alterar o nome do perfil. Por favor, tente novamente.");
        }
    }

    return (
            <div className="flex min-w-0 p-3 bg-animated-black-ct">
                <Sidebar ProfileChecked={true} />
                <main className="flex flex-col p-4 w-full md:ml-64 bg-white rounded-2xl shadow-md">
                    <div className="flex items-center min-w-full justify-center">
                        <h1 className="text-2xl font-bold">Meu Perfil</h1>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-4 mb-4">
                        <img src="https://via.placeholder.com/300" alt="Profile" className="rounded-full w-32 h-32 mx-auto mt-4" />
                        <h2>John Doe</h2>
                    </div>

                    {/*Edição do perfil*/}
                    <div className="flex flex-col items-center justify-center gap-3 w-full overflow-x-hidden">
                        {/*Alterar a foto do perfil */}
                        <div className="flex flex-col items-center justify-center mt-4 mb-4 gap-2 p-4 w-full max-w-md">            
                            <InputField
                                icon = {UserIcon}
                                colorIcon = "var(--color-orange)"
                                type="text"
                                placeholder="Link foto do perfil"
                                label="LinkPhoto"
                                value={linkPhoto}
                                onChange={(value) => setLinkPhoto(value)}
                                name="LinkPhoto"  
                                textColor="text-black"
                                className="w-full"                          
                            />
                            <button type="submit" onClick={() => onActionPhoto(linkPhoto)} className="rounded-md min-w-1/4 p-2 bg-orange-500 hover:bg-orange-600 " >Alterar Foto</button>
                        </div>

                        {/*Alterar o nome do perfil */}
                        <div className="flex flex-col items-center justify-center mt-4 mb-4 gap-2 p-4 w-full max-w-md">
                            <InputField
                                icon = {PencilIcon}
                                colorIcon = "var(--color-orange)"
                                type="text"
                                placeholder="Editar nome"
                                label="EditName"
                                value={editName}
                                onChange={(value) => setEditName(value)}
                                name="EditName"
                                textColor="text-black"
                                className="w-full"
                            />
                            <button type="submit" onClick={() => onActionName(editName)} className="rounded-md min-w-1/4 p-2 bg-orange-500 hover:bg-orange-600 " >Alterar Nome</button>
                        </div> 
                    </div>                   
                </main>
            </div>
        );
}