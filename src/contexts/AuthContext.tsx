import {createContext, useEffect, useState} from "react";
import { api } from "../services/api";
import { QueryClient } from "@tanstack/react-query";


type AuthContext = {
    user : User | null;
    loading: boolean;
    signIn: (token: string) => Promise<void>;
    signOut: () => void;
}

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children}: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    const queryClient = new QueryClient();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token){
            setLoading(false);
            return;
        }

        api.get<User>("/me").then(({data}) => { setUser(data) }).catch(() => {
            localStorage.removeItem("token");
            setUser(null);
        }).finally(() => setLoading(false));

    }, []);

    async function signIn(token: string) {
        localStorage.setItem("token", token);
        const {data} = await api.get<User>("/me");
        setUser(data);
    }

    function signOut() {
        localStorage.removeItem("token");
        queryClient.clear();
        setUser(null);
    }
        

    return (
        <AuthContext.Provider value={{user, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}