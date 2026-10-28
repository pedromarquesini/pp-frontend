import logo from "../../assets/ct-junior-all-white.svg";
import { InputField } from "../../components/InputField";
import { EnvelopeSimpleIcon, KeyIcon, SealCheckIcon, UserIcon} from "@phosphor-icons/react";

import { useState } from "react";

export default function Register() {      
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');    

    const isSamePassword = password === confirmPassword;
        
    return (      
        <main className="login-page flex flex-col items-center h-screen p-1">
            <section className="form-section flex flex-col gap-3 items-center justify-center p-8 rounded-lg w-full max-w-md md:max-w-xl lg:max-w-4xl">                    
                <img src={logo} alt="Logo CT Junior" className="sm:w-100 md:w-3/4 lg:w-1/2" />
                <form className=" sm:w-full md:w-3/4 lg:w-3/4  flex flex-col gap-2">
                        <InputField /*Name */
                            icon={UserIcon}     
                            iconWeight="regular"
                            type="text"
                            placeholder="Digite seu nome"
                            label="Nome"
                            value=""
                            onChange={() => {}}
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
                            value=""
                            onChange={() => {}}
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
                            onChange={setPassword}
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
                            onChange={setConfirmPassword}
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
                        <button type="submit" disabled={!password || !confirmPassword || !isSamePassword}  className="w-full md:w-1/2 lg:w-1/4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed">
                            Cadastrar
                        </button>  
                    </div> 
                </form>
                <a href="/login" className="text-orange-500 hover:underline">Volte para o login</a>       
            </section>
        </main>
    );

};
