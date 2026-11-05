import logo from "../../assets/ct-junior-all-white.svg";
import { InputField } from "../../components/InputField";
import { EnvelopeSimpleIcon, KeyIcon} from "@phosphor-icons/react";
import "../../styles/animations.css";

import "./style.css";
import { useState } from "react";

export default function Login() {      
    const [showPassword, setShowPassword] = useState(false);

    return (      
        <main className="p-2 flex flex-col items-center h-screen lg:justify-center bg-animated-orange-ct">
            <section className="form-section flex flex-col gap-3 items-center justify-center p-8 rounded-lg w-full max-w-md md:max-w-xl lg:max-w-4xl">                    
                <img src={logo} alt="Logo CT Junior" className=" sm:w-100 md:w-3/4 lg:w-1/2" />
                <form className=" sm:w-full md:w-3/4 lg:w-3/4  flex flex-col gap-2">
                    <InputField /* Email */
                        icon={EnvelopeSimpleIcon}     
                        iconWeight="regular"
                        type="email"
                        placeholder="Digite seu email"
                        label="Email"
                        value=""
                        onChange={() => {}}
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
                        onChange={() => {}}
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
