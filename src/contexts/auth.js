import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem('user-token');
        const usersStorage = localStorage.getItem('users-db');

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage).filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const signIn = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem('users-db'));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem('user-token', JSON.stringify({ email, token }));
                setUser({ email, password });
                return;
            } else {
                return 'E-mail ou senha incorretos';
            }
        } else {
            return 'Usuário não cadastrado';
        }
    };

    const signUp = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem('users-db'));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            return 'Já tem uma conta com esse E-mail';
        }

        let newUser;

        if (usersStorage) {
            newUser = [...usersStorage, { email, password }];
        } else {
            newUser = [{ email, password }];
        }

        localStorage.setItem('users-db', JSON.stringify(newUser));
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem('user-token');
    };

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signIn, signUp, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};