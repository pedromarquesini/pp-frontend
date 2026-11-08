import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth-routes";

import {useAuth} from "../hooks/useAuth";

export function Routes() {
    const context = useAuth();

    return (        
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    );
}