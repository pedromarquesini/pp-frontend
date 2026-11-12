import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth-routes";
import { useAuth } from "../hooks/useAuth";
import { UserRoutes } from "./user-routes";


export function Routes() {
    const { user, loading } = useAuth();
    function Route(){        
        if(loading){
            return <div>Carregando...</div>
        }
        return user ? <UserRoutes /> : <AuthRoutes />;
    }

    return (        
        <BrowserRouter>
            <Route />
        </BrowserRouter>
    );
}