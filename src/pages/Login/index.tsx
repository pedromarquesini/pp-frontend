import logo from "../../assets/ct-junior-all-white.svg";
import { InputField } from "../../components/InputField";
import { EnvelopeSimpleIcon, KeyIcon} from "@phosphor-icons/react";


import "./style.css";

export default function Login() {      

    return (
        <main className="login-page flex flex-col items-center h-screen p-1">
            <section className="form-section flex flex-col gap-3 items-center justify-center p-8 rounded-lg w-full max-w-md md:max-w-xl lg:max-w-4xl">                    
                <img src={logo} alt="Logo CT Junior" className=" sm:w-100 md:w-3/4 lg:w-1/2" />
                <div className=" sm:w-full md:w-3/4 lg:w-3/4  flex flex-col gap-2">
                    <InputField         
                        icon={EnvelopeSimpleIcon}     
                        iconWeight="duotone"
                        type="email"
                        placeholder="Digite seu email"
                        label="Email"
                        value=""
                        onChange={() => {}}
                        name="email"
                        required={true}
                        className="w-full "
                    />
                    <div className=" flex-colh-2">
                        <InputField
                        icon={KeyIcon}
                        iconWeight="duotone"
                        type="password"
                        placeholder="Digite sua senha"
                        label="Senha"
                        value=""
                        onChange={() => {}}
                        name="password"
                        required={true}                       
                        />
                        <span className="flex items-center gap-2 mt-1">
                            <input type="checkbox" name="showPassword" className="text-white accent-[var(--color-orange)]"/>
                            <p className="text-white">Mostrar senha</p>                            
                        </span>
                    </div>
                    
                </div>
                <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                    Entrar
                </button>
                <p className="text-white mt-4 ">
                    Não possui uma conta? <a href="/register" className="text-orange-500 hover:underline">Cadastre-se</a>
                </p>
            </section>
        </main>
    );

};
