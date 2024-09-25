import { useState, createContext, ReactNode, useEffect } from 'react';

interface ILanguageContext {
    language: string;
    toggleLanguage: () => void;
    getText: (chave : string) => string;
}

export const LanguageContext = createContext({} as ILanguageContext);
LanguageContext.displayName = 'Language';

export const LanguageProvider = ({ children }: { children: ReactNode }) => { 
    const [language, setLanguage] = useState<string>(localStorage.getItem("language") != undefined ? String(localStorage.getItem("language")) :  "pt");
    const [translations, setTranslations] = useState<{ [key: string]: string }>({});

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
    }

    useEffect(() => {
        const carregarTraducoes = async () => {
            try {
                const dados = await import(`./Languages/${language}.json`);
                setTranslations(dados.default);
            } catch (error) {
                console.error("Erro ao buscar o arquivo:", error);
            }
        };

        carregarTraducoes();
        localStorage.setItem("language", language);
    }, [language]);

    const getText = (chave: string): any | null => {
        return translations[chave] ?? null; 
    }

    return (
        <LanguageContext.Provider
            value={{
                language,
                toggleLanguage,
                getText
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}