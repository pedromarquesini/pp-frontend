import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./style.css"
import "../../styles/animations.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { api } from "../../services/api";
import AlertMessage from "../../components/alert";
import { AxiosError } from "axios";
import SubmitButton from "../../components/SubmitButton";

const newEmailSchema = {
    to: z.string().email({ message: "Email inválido" }),
    subject: z.string().min(1, { message: "O título do email não pode estar vazio" }),
    bodyEmail: z.string().min(1, { message: "O conteúdo do email não pode estar vazio" }),
};

export default function NewEmail() {
    const navigate = useNavigate();
    
    const [alert, setAlert] = useState<{ 
        message: string; 
        type: "success" | "error" | "info";
    } | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, []);

    async function onAction(formData: FormData) {
        const to = formData.get("to") as string;
        const subject = formData.get("subject") as string;
        const bodyEmail = formData.get("bodyEmail") as string;
        try {
            const data = {
                emailDeDestinatario: newEmailSchema.to.parse(to),
                title: newEmailSchema.subject.parse(subject),
                content: newEmailSchema.bodyEmail.parse(bodyEmail),
            }   
            await api.post("/email", data).then(() => {
                setAlert({
                    message: "Email enviado com sucesso!",
                    type: "success"
                });
                navigate("/main");
            }).catch((error) => {
                console.error(error);
                setAlert({
                    message: "Ocorreu um erro ao enviar o email. Por favor, tente novamente.",
                    type: "error"
                });
                if(error instanceof AxiosError) {
                    if(error.response?.status === 404) {
                        console.error("Email não encontrado.");
                        setAlert({
                            message: "Email de destinatário não encontrado.",
                            type: "error"
                        });                        
                    }else if(error.response?.status === 401) {
                        // console.error("Usuário não autorizado. Por favor, faça login novamente.");
                        setAlert({
                            message: "Usuário não autorizado. Por favor, faça login novamente.",
                            type: "error"
                        });
                    }
                }

            });

        }catch (error) {
            console.error(error);
            if (error instanceof z.ZodError) {
                console.error(error.issues[0].message);
                setAlert({
                    message: error.issues[0].message,
                    type: "error"
                });
                return;
            }
            setAlert({
                message: "Dados inválidos. Por favor, verifique as informações fornecidas.",
                type: "error"
            });
        }
    }


    return (
        <div className="flex min-h-screen min-w-0 p-3 bg-animated-black-ct">
            <Sidebar />
            <main className="flex-1 p-4 w-full max-w-full overflow-x-hidden md:ml-64 bg-white rounded-2xl shadow-md">
                <div className="flex items-center min-w-full justify-center">
                    <h1 className="text-2xl font-bold">Novo email</h1>
                </div>
                {alert && (
                    <div className="w-full sm:w-full md:w-3/4 lg:w-3/4">
                        <AlertMessage message={alert.message} type={alert.type} />
                    </div>
                )}
                <form className="flex flex-1 flex-col gap-1 mt-4 min-h-0" action={onAction}>     
                    <label htmlFor="to" className="mt-2">Para</label>
                    <input type="email" id="to" name="to" placeholder="Digite o email do destinatário" className="input-style" />

                    <label htmlFor="subject" className="mt-2">Título</label>
                    <input type="text" id="subject" name="subject" placeholder="Digite o título do email" className="input-style" />

                    <label htmlFor="bodyEmail" className="mt-2">Conteúdo do email</label>
                    <textarea id="bodyEmail" name="bodyEmail" placeholder="Insira o conteúdo do email" className="input-style flex-1 min-h-64 resize-none"/>

                    <span className="flex items-center justify-center">
                        <SubmitButton label="Enviar" labelLoading="Enviando..." />
                    </span>

                </form>
            </main>
        </div>
    );
}