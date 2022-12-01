import { useConfiguration } from "../../hooks/configuration";

export function Configurations(){

    const [theme, changeTheme] = useConfiguration()
    //const {currentLanguage, changeCurrentLanguage} = useLanguage()

    return (
        <div className="configurations-component">
            <h1>{}</h1>
        </div>
    )
}