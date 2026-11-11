import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./style.css"
import "../../styles/animations.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { api } from "../../services/api";

const newEmailSchema = {
    to: z.string().email({ message: "Email inválido" }),
    subject: z.string().min(1, { message: "O título do email não pode estar vazio" }),
    bodyEmail: z.string().min(1, { message: "O conteúdo do email não pode estar vazio" }),
};

export default function NewEmail() {
    const navigate = useNavigate();
    
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
            await api.post("/email", data).then((response) => {
                alert("Email enviado com sucesso!");
                navigate("/main");
            }).catch((error) => {
                console.error(error);
                alert("Ocorreu um erro ao enviar o email. Por favor, tente novamente.");
            });

        }catch (error) {
            console.error(error);
            if (error instanceof z.ZodError) {
                alert(error.issues[0].message);
                return;
            }
            alert("Dados inválidos. Por favor, verifique as informações fornecidas.");
        }
    }


    return (
        <div className="flex min-h-screen min-w-0 p-3 bg-animated-black-ct">
            <Sidebar />
            <main className="flex-1 p-4 w-full max-w-full overflow-x-hidden md:ml-64 bg-white rounded-2xl shadow-md">
                <div className="flex items-center min-w-full justify-center">
                    <h1 className="text-2xl font-bold">Novo email</h1>
                </div>
                <form className="flex flex-1 flex-col gap-1 mt-4 min-h-0" action={onAction}>     
                    <label htmlFor="to" className="mt-2">Para</label>
                    <input type="email" id="to" name="to" placeholder="Digite o email do destinatário" className="input-style" />

                    <label htmlFor="subject" className="mt-2">Título</label>
                    <input type="text" id="subject" name="subject" placeholder="Digite o título do email" className="input-style" />

                    <label htmlFor="bodyEmail" className="mt-2">Conteúdo do email</label>
                    <textarea id="bodyEmail" name="bodyEmail" placeholder="Insira o conteúdo do email" className="input-style flex-1 min-h-64 resize-none"/>

                    <span className="flex items-center justify-center">
                        <button type="submit" className="rounded-md min-w-1/4 p-2 bg-orange-500 hover:bg-orange-600 " >Enviar</button>
                    </span>

                </form>
            </main>
        </div>
    );
}