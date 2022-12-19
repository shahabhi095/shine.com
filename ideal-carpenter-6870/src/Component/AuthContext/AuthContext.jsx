import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext()

export default AuthContextProvider=({children})=>{

const [token, settoken] = useState(false)










return <>
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
    </>
}