import { Routes } from "./routes"
import {AuthProvider} from "./contexts/AuthContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import  './App.css'

const queryClient = new QueryClient();

function App() { 

  return (    
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes />    
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
