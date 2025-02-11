/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "./Firebase.config";

export const Auth_Context = createContext(null);

const Auth = ({ children }) => {
    const [user, set_user] = useState(null);

    const user_login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const create_user = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const info = {
        create_user,
        user_login,
        user,
        set_user
        };

    return (
        <Auth_Context.Provider value={info}>
            {children}
        </Auth_Context.Provider>
    );
};

export default Auth;
