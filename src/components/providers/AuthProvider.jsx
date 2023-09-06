import Cookies from "js-cookie";
import { createContext, useState } from "react";
import { TOKEN } from "../services/local.api.auth/app.token";



export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))

    return(
        <AuthContext.Provider value={{isAuth, setIsAuth}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider