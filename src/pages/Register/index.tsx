import logo from "../../assets/ct-junior-all-white.svg";
import { InputField } from "../../components/InputField";
import { EnvelopeSimpleIcon, KeyIcon, SealCheckIcon, UserIcon} from "@phosphor-icons/react";
import { useNavigate} from "react-router-dom";
import { z, ZodError } from "zod";
import { useState } from "react";
import { api } from "../../services/api";
import { AxiosError } from "axios";


const signUpSchema = z.object({
    nome: z.string().trim().min(1, { message: "O nome é obrigatório" }),
    email: z.string().email({ message: "Email inválido" }),
    senha: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});


export default function Register() {      
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');    

    const isSamePassword = password === confirmPassword;

    const navigate = useNavigate();

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const data = signUpSchema.parse({
                nome: (event.currentTarget.elements.namedItem("name") as HTMLInputElement).value,
                email: (event.currentTarget.elements.namedItem("email") as HTMLInputElement).value,
                senha: (event.currentTarget.elements.namedItem("password") as HTMLInputElement).value,
            })


            await api.post('/user', data);

            if(confirm("Usuário cadastrado com sucesso! Deseja ir para a tela de login?")) {
                navigate("/login");
            }
        }catch (error) {
            console.log(error);
            if(error instanceof ZodError) {
                return alert(error.issues[0].message);
            }
            if(error instanceof AxiosError) {
                return alert(error.response?.data.message || "Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente.");
            }
            alert("Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente.");
        }

    }
        
    return (      
        <main className="flex flex-col items-center h-screen lg:justify-center p-1 bg-animated-orange-ct">
            <section className="form-section flex flex-col gap-3 items-center justify-center p-8 rounded-3xl w-full max-w-md md:max-w-xl lg:max-w-4xl">                    
                <img src={logo} alt="Logo CT Junior" className="sm:w-100 md:w-3/4 lg:w-1/2" />
                <form onSubmit={onSubmit} className=" sm:w-full md:w-3/4 lg:w-3/4  flex flex-col gap-4">
                        <InputField /*Name */
                            icon={UserIcon}     
                            iconWeight="regular"
                            type="text"
                            placeholder="Digite seu nome"
                            label="Nome"
                            value={name}
                            onChange={(value) => setName(value)}
                            name="name"
                            required={true}
                            className="w-full"                            
                        />
                        <InputField /* Email */
                            icon={EnvelopeSimpleIcon}     
                            iconWeight="regular"
                            type="email"
                            placeholder="Digite seu email"
                            label="Email"
                            value={email}
                            onChange={(value) => setEmail(value)}
                            name="email"
                            required={true}
                            className="w-full"
                        />                    
                        <InputField /* Password */
                            icon={KeyIcon}
                            iconWeight="regular"
                            type='password'
                            placeholder="Digite sua senha"
                            label="Senha"
                            value={password}
                            onChange={(value) => setPassword(value)}
                            name="password"
                            required={true}                       
                        />  
                        <InputField /* Confirm Password */
                            icon={SealCheckIcon}
                            iconWeight="regular"
                            type='password'
                            placeholder="Confirme sua senha"
                            label="Confirmar Senha"
                            value={confirmPassword}
                            onChange={(value) => setConfirmPassword(value)}
                            name="confirmPassword"
                            required={true}                       
                        /> 
                        {
                            confirmPassword && !isSamePassword &&  (
                                <p className="text-red-500 text-sm">
                                    As senhas não coincidem.
                                </p>
                            )
                        }
                                                                      
                    <div className="flex align-center justify-center mt-4">
                        <button type="submit" disabled={!password || !confirmPassword || !isSamePassword} className="w-full md:w-1/2 lg:w-1/4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed">
                                Cadastrar
                        </button>  
                        
                    </div> 
                </form>
                <a href="/login" className="text-orange-500 hover:underline">Volte para o login</a>       
            </section>
        </main>
    );
};
