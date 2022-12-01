import { createContext } from "react";


//cria contexto
const ConfigurationContext = createContext()

//cria provedor p/ contexto
export function ConfigurationProvider(props){

    const themeLocalStorage = localStorage.getItem('theme')
    //state que controla o tema aplicado
    const [theme, setTheme] = useState(themeLocalStorage === null ? 'dark':themeLocalStorage)    

    //funcao resp por trocar o tema
    function changeTheme(themeReceived){
        if(themeReceived !== theme){
            setTheme(themeReceived)
            localStorage.setItem('theme', themeReceived)
        }
    }

    const currentLanguageSaved = local.getItem('currentLanguage')
    const [currentLanguage, setCurrentLanguage] = useState(currentLanguageSaved === null ? 'english' : currentLanguageSaved)
    const languagesAllowed = ['portuguese', 'english']

    function changeCurrentLanguage(language){
        const languageIsAllowed = languagesAllowed.includes(language)
        if(language !== currentLanguage && languageIsAllowed){
            setCurrentLanguage(language)
            localStorage.setItem('currentLanguage', language)
        }        
    }

    

    return(
        <ConfigurationContext.Provider value ={
            [
                {
                    theme,
                    changeTheme
                },
                {
                    currentLanguage,
                    changeCurrentLanguage
                }
            ]
        }>
            {props.children}
        </ConfigurationContext.Provider>
    )

}

export function useConfiguration(){
    const context = useContext(ConfigurationContext)

    return context
}