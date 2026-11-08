import { Routes } from "./routes"
import {AuthProvider} from "./contexts/AuthContext"

import  './App.css'

function App() { 

  return (    
    <AuthProvider>
      <Routes />    
    </AuthProvider>
  )
}

export default App
