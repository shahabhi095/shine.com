import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext()

 const AuthContextProvider=({children})=>{

const [token, settoken] = useState(false)
const [getemail, setgetEmail] = useState("")

const getEmail=(val)=>{
    setgetEmail(val)


}
    console.log(getemail)

return <>
    <AuthContext.Provider value ={{getEmail,getemail}}>
        {children}
    </AuthContext.Provider>
    </>
}

export default AuthContextProvider;