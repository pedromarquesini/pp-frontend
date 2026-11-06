import { InputField } from "../../components/InputField";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { PencilIcon, UserIcon } from "@phosphor-icons/react";

import "../../styles/animations.css";


export default function Profile() {
    return (
            <div className="flex min-h-screen min-w-0 p-3 bg-animated-black-ct">
                <Sidebar ProfileChecked={true} />
                <main className="flex-1 p-4 w-full max-w-full overflow-x-hidden md:ml-64 bg-white rounded-2xl shadow-md">
                    <div className="flex items-center min-w-full justify-center">
                        <h1 className="text-2xl font-bold">Meu Perfil</h1>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-4 mb-4">
                        <img src="https://via.placeholder.com/300" alt="Profile" className="rounded-full w-32 h-32 lg:w-64 lg:h-64 mx-auto mt-4" />
                        <h2>John Doe</h2>
                    </div>

                    {/*Edição do perfil*/}
                    <div className="flex flex-col items-center justify-center gap-3 w-full">
                        {/*Alterar a foto do perfil */}
                        <div className="flex flex-col items-center justify-center mt-4 mb-4 gap-2 p-4 w-full max-w-md">            
                            <InputField
                                icon = {UserIcon}
                                colorIcon = "var(--color-orange)"
                                type="text"
                                placeholder="Link foto do perfil"
                                label="LinkPhoto"
                                value=""
                                onChange={() => {}}
                                name="LinkPhoto"  
                                textColor="text-black"
                                className="w-full"                          
                            />
                            <button type="submit" className="rounded-md min-w-1/4 p-2 bg-orange-500 hover:bg-orange-600 " >Alterar Foto</button>
                        </div>

                        {/*Alterar o nome do perfil */}
                        <div className="flex flex-col items-center justify-center mt-4 mb-4 gap-2 p-4 w-full max-w-md">
                            <InputField
                                icon = {PencilIcon}
                                colorIcon = "var(--color-orange)"
                                type="text"
                                placeholder="Editar nome"
                                label="EditName"
                                value=""
                                onChange={() => {}}
                                name="EditName"
                                textColor="text-black"
                                className="w-full"
                            />
                            <button type="submit" className="rounded-md min-w-1/4 p-2 bg-orange-500 hover:bg-orange-600 " >Alterar Nome</button>
                        </div> 
                    </div>                   
                </main>
            </div>
        );
}