import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import EntranceMail from "../../components/EntranceMail";
import {Sidebar} from "../../components/Sidebar/Sidebar";
import "../../styles/animations.css";
import { getMyEmails } from "../../services/emails";

export default function MainPage() {

    const navigate = useNavigate();

    const {data: emails = [], isPending, isError, refetch} = useQuery({
        queryKey: ["emails"],
        queryFn: getMyEmails,
    });

    return (
        <div className="flex  min-w-0 p-3 bg-animated-black-ct ">
            <Sidebar EntranceChecked={true} />
            <main className="flex-1 p-4 w-full max-w-full overflow-x-hidden md:ml-64 bg-white rounded-2xl shadow-md ">
                <span className="flex justify-center items-center w-full mb-2">
                    <h1 className="text-2xl font-bold text-gray-800">Entrada</h1>
                </span>
                
                {isPending && <p>Carregando...</p>}

                {isError && (
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-red-500">Não foi possível carregar seus emails.</p>
                        <button onClick={() => refetch()} className="text-orange-500 hover:underline">
                            Tentar novamente
                        </button>
                    </div>
                )}

                {!isPending && !isError && emails.length === 0 && (
                    <p className="text-gray-500">Nenhum email na caixa de entrada.</p>
                )}

                {emails.map((email) => (
                    <EntranceMail
                        key={email.email_id}                        
                        emailSentBy={email.enviado_por}
                        title={email.titulo}
                        viewed={email.jaVisto}
                        onClick={() => navigate(`/email/${email.email_id}`)}
                    />
                ))}                  
            </main>
        </div>
    );
}