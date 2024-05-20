// src/context/AuthContext.js
import { createContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: localStorage.getItem('token'),
        user: null,
    });

    useEffect(() => {
        if (authState.token) {
            const user = jwtDecode(authState.token);
            setAuthState({ ...authState, user });
        }
    }, [authState.token]);

    const login = (token) => {
        localStorage.setItem('token', token);
        const user = jwtDecode(token);
        setAuthState({ token, user });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuthState({ token: null, user: null });
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
