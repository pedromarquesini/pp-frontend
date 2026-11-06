import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./style.css"
import "../../styles/animations.css";

export default function NewEmail() {
    return (
        <div className="flex min-h-screen min-w-0 p-3 bg-animated-black-ct">
            <Sidebar />
            <main className="flex-1 p-4 w-full max-w-full overflow-x-hidden md:ml-64 bg-white rounded-2xl shadow-md">
                <div className="flex items-center min-w-full justify-center">
                    <h1 className="text-2xl font-bold">Novo email</h1>
                </div>
                <form className="flex flex-1 flex-col gap-1 mt-4 min-h-0">      
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