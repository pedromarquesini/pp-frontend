import { useEffect } from "react";
import {Sidebar} from "../../components/Sidebar/Sidebar";
import "../../styles/animations.css";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getEmail } from "../../services/emails";
import { ArrowLeftIcon } from "@phosphor-icons/react";

export default function ViewEmail() {
    
    const navigate = useNavigate();
    const {emailId} = useParams();
    const queryClient = useQueryClient();

    const { data: email, isPending, isError, isSuccess, refetch } = useQuery({
        queryKey: ["email", emailId],
        queryFn: () => getEmail(emailId!),
        enabled: !!emailId,
    });
    
    useEffect(() => {
        if (isSuccess) {
            queryClient.invalidateQueries({ queryKey: ["my-emails"] });
        }
    }, [isSuccess, queryClient]);


    return (
        <div className="flex min-h-screen min-w-0 p-3 bg-animated-black-ct">
            <Sidebar />
            <main className="flex-1 p-4 w-full max-w-full overflow-x-hidden md:ml-64 bg-white rounded-2xl shadow-md">

                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-1 text-gray-600 hover:text-orange-500 mb-2"
                >
                    <ArrowLeftIcon /> Voltar
                </button>

                {isPending && <p>Carregando...</p>}

                {isError && (
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-red-500">Não foi possível carregar este email.</p>
                        <button onClick={() => refetch()} className="text-orange-500 hover:underline">
                            Tentar novamente
                        </button>
                    </div>
                )}

                {email && (
                    <>
                        <span className="flex justify-center items-center w-full mb-2">
                            <h1 className="text-2xl font-bold text-gray-800">{email.titulo}</h1>
                        </span>
                        <span>
                            <span className="flex flex-row gap-2">
                                <p className="">Enviado por:</p>
                                <p className="text-orange-500">{email.enviado_por}</p>                     
                            </span>
                            <p className="mt-2 flex text-justify">
                                {email.content}
                            </p>
                        </span>
                    </>
                )}
            </main>
        </div>
    );
}