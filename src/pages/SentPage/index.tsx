import { useEffect, useState } from "react";
import SentMail from "../../components/SentMail";
import {Sidebar} from "../../components/Sidebar/Sidebar";
import "../../styles/animations.css";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteEmail, getSentEmails } from "../../services/emails";
import { useMutation } from "@tanstack/react-query";
import AlertMessage  from "../../components/alert";

export default function SentPage() {

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [alert, setAlert] = useState<{ 
        message: string; 
        type: "success" | "error" | "info";
    } | null>(null);

    const { data: emails = [], isPending, isError, refetch } = useQuery({
        queryKey: ["sent-emails"],
        queryFn: getSentEmails,
    });

    const deleteMutation = useMutation({
        mutationFn: deleteEmail,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["sent-emails"] });
        },
        onError: () => {
            console.error("Erro ao deletar o email.");
            setAlert({
                message: "Ocorreu um erro ao deletar o email. Por favor, tente novamente.",
                type: "error"
            });
        },
    });

    function handleDelete(emailId: string) {
        if (!confirm("Tem certeza que deseja apagar este email?")) return;
        deleteMutation.mutate(emailId);    
    }



    return (
        <div className="flex  min-w-0 p-3 bg-animated-black-ct ">
            <Sidebar SentChecked={true} />
            <main className="flex-1 p-4 w-full max-w-full overflow-x-hidden md:ml-64 bg-white rounded-2xl shadow-md ">
                <span className="flex justify-center items-center w-full mb-2">
                    <h1 className="text-2xl font-bold text-gray-800">Enviados</h1>
                </span>

                {isPending && <p>Carregando...</p>}

                {isError && (
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-red-500">Não foi possível carregar seus emails enviados.</p>
                        <button onClick={() => refetch()} className="text-orange-500 hover:underline">
                            Tentar novamente
                        </button>
                    </div>
                )}

                {!isPending && !isError && emails.length === 0 && (
                    <p className="text-gray-500">Você ainda não enviou nenhum email.</p>
                )}

                {alert && (
                    <div className="w-full sm:w-full md:w-3/4 lg:w-3/4">
                        <AlertMessage message={alert.message} type={alert.type} />
                    </div>
                )}

                {emails.map((email) => (                  
                    <SentMail
                        key={email.email_id}
                        emailSentTo={email.enviado_para}
                        title={email.titulo}
                        viewed={email.jaVisto}
                        onClick={() => navigate(`/email/${email.email_id}`)}
                        onDelete={() => handleDelete(email.email_id)}
                        deleting={deleteMutation.isPending && deleteMutation.variables === email.email_id}
                    />
                ))}
            </main>
        </div>
    );
}