import { useState, createContext, ReactNode, useEffect } from 'react';
import { IUser } from '../Types/interfaces';
import { jwtDecode } from 'jwt-decode';

interface IUserContext {
    currentUser: IUser | null;
    firstAccess: boolean;
    userLogout: () => void;
    Login: (token: string) => void;
    setFirstAccess:(a: boolean) => void;
}

export const UserContext = createContext({} as IUserContext);
UserContext.displayName = 'UserContext';

export const UserProvider = ({ children } : { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<IUser | null>(null);
    const [firstAccess, setFirstAccess] = useState(false);

    
    useEffect(() => {
        const token = sessionStorage.getItem('@TOKEN');
        if (token) {
          try {
            const decodedUser = jwtDecode<IUser>(token);
            setCurrentUser(decodedUser);
        
          } catch (error) {
            console.error("Erro ao decodificar o token: ", error);
            userLogout();
          }
        }
    }, []); 

    function Login(token: string) {
        sessionStorage.setItem('@TOKEN', token);
        const decodedUser = jwtDecode<IUser>(token);
        setCurrentUser(decodedUser);
    }

    function userLogout() {
        sessionStorage.removeItem('@TOKEN');
        setCurrentUser(null);
    }
   
    return (
        <UserContext.Provider
            value={{
                currentUser,
                firstAccess,
                Login,
                userLogout,
                setFirstAccess
            }}
        >
            {children}
        </UserContext.Provider>
    )
}