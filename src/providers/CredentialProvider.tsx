import React, { createContext, useState, ReactNode, SetStateAction } from "react";

interface CredentialContextInterface {
    email: string;
    password: string;
    handleChangeCredential: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setCredentials: React.Dispatch<SetStateAction<CredentialState>>;
}

interface CredentialState {
    email: string;
    password: string;
}

export const CredentialContext = createContext<CredentialContextInterface>({
    email: "",
    password: "",
    handleChangeCredential: () => {},
    setCredentials: () => {},
});

export const CredentialProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [credentials, setCredentials] = useState<CredentialState>({
        email: "",
        password: "",
    });

    const handleChangeCredential = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <CredentialContext.Provider value={{ ...credentials, handleChangeCredential, setCredentials }}>
            {children}
        </CredentialContext.Provider>
    );
};
