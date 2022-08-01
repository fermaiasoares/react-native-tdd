import React, { useState } from "react";
import { createContext, useContext } from "react";
import * as AuthSession from 'expo-auth-session';

interface AuthContextData {
    user: {};
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface IProps {
    children?: React.ReactNode;
}

function AuthProvider({ children }: IProps) {
    const [user, setUser] = useState({});
    async function signIn() {
        console.log('EXECUTOU SIGNIN');
        setUser({ email: 'fermaiasoares@aol.com' });
    }

    async function signOut() {
        console.log('EXECUTOU SIGNOUT')
        setUser({});
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth most be use in AuthContext");
    }

    return context;
}

export { AuthProvider, useAuth };
