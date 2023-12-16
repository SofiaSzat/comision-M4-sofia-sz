import {createContext, useContext, useState} from "react";
import {guardar, guardarToken, obtener, obtenerToken, limpiarLocalStorage,} from '../utils/login.js';
const AuthContext = createContext();

const AuthProvider = (props) => {
    const {children} = props;

    const [usuario, setUsuario] =useState(null);

    const login = (datos) => {
        guardar(datos);
        guardarToken(token);

        setUsuario(datos);
    }
    const logout =()=> {
        limpiarLocalStorage();
        setUsuario(null);

    }
    return (
        <AuthContext.Provider value={ {usuario, login, logout }}>
                { children }
        </AuthContext.Provider>

    );

}

const useAuthContext = () => useContext(AuthContext);

export {
    AuthProvider,
    useAuthContext
}