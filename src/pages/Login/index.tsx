import logo from "../../assets/ct-junior-all-white.svg";
import { InputField } from "../../components/InputField";
import { EnvelopeSimpleIcon, KeyIcon} from "@phosphor-icons/react";
import { api } from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z,ZodError } from "zod";
import  AlertMessage  from "../../components/alert";

import "../../styles/animations.css";
import "./style.css";
import { AxiosError } from "axios";
import { useAuth } from "../../hooks/useAuth";



const signInSchema = {
    email: z.string().email({ message: "Email inválido" }),
    senha: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
};

export default function Login() {      
    
    const context = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const [alert, setAlert] = useState<{ 
        message: string; 
        type: "success" | "error" | "info";
    } | null>(null);

    const navigate = useNavigate();

    async function onAction(formData: FormData) {
        const email = formData.get("email") as string;
        const senha = formData.get("password") as string;

        try{
            const data = {
                email: signInSchema.email.parse(email),
                senha: signInSchema.senha.parse(senha),
            }

            const response = await api.post("/login", data);
            //console.log("Resposta da API:", response.data);


            const { token } = response.data;
            await context.signIn(token);
            navigate("/main");        

        } catch (error) {
            console.error(error);
            if(error instanceof ZodError) {
                console.error(error.issues[0].message);
                return;
            }
            if(error instanceof AxiosError) {
                if (error.response?.status === 400) {
                    console.error("Email ou senha incorretos. Por favor, tente novamente.");
                    setAlert({
                        message: "Email ou senha incorretos. Por favor, tente novamente.",
                        type: "error"
                    })
                }
                return;
            }           
            return;
        }            
    }

    return (    
        
        <main className="p-2 flex flex-col items-center h-screen lg:justify-center bg-animated-orange-ct">           
            <section className="form-section flex flex-col gap-3 items-center justify-center p-8 rounded-3xl w-full max-w-md md:max-w-xl lg:max-w-4xl">                    
                <img src={logo} alt="Logo CT Junior" className=" sm:w-100 md:w-3/4 lg:w-1/2" />

                {alert && (
                    <div className="w-full sm:w-full md:w-3/4 lg:w-3/4">
                        <AlertMessage message={alert.message} type={alert.type} />
                    </div>
                )}

                <form className=" sm:w-full md:w-3/4 lg:w-3/4  flex flex-col gap-2" action={onAction}>
                    <InputField /* Email */
                        icon={EnvelopeSimpleIcon}     
                        iconWeight="regular"
                        type="email"
                        placeholder="Digite seu email"
                        label="Email"
                        value=""                        
                        name="email"
                        required={true}
                        className="w-full"
                    />
                    <div className=" flex-colh-2">
                        <InputField /* Password */
                        icon={KeyIcon}
                        iconWeight="regular"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Digite sua senha"
                        label="Senha"
                        value=""                        
                        name="password"
                        required={true}                       
                        />
                        <span className="flex items-center gap-2 mt-1">
                            <input type="checkbox" name="showPassword" checked={showPassword} onChange={() => setShowPassword(!showPassword)} className="text-white accent-[var(--color-orange)]"/>
                            <p className="text-white">Mostrar senha</p>                            
                        </span>
                    </div>

                    <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                    Entrar
                    </button>
                </form>
                
                <p className="text-white mt-4 ">
                    Não possui uma conta? <a href="/register" className="text-orange-500 hover:underline">Cadastre-se</a>
                </p>
            </section>
        </main>
    );

};
