import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth-routes";
import { UserRoutes } from "./user-routes";

import {useAuth} from "../hooks/useAuth";

export function Routes() {
    const session = useAuth();

    function Route(){
        switch (session?.session?.role) {
            case "user":
                return <UserRoutes />;
            default:
                return <AuthRoutes />;
        }
    }

    return (        
        <BrowserRouter>
            <Route />
        </BrowserRouter>
    );
}