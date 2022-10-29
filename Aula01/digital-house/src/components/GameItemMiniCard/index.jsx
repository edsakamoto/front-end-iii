export function GameItemMiniCard(props){

    console.log(props)

    return(
        <li>
            <img src={props.game.picture} alt="" />            
            <h3>{props.game.name}</h3>
            <p>{props.game.plataforms.toString()}</p>
            <p>{props.game.categories.toString()}</p>
            <p>{props.game.price}</p>            
            
        </li>
    )      
}

//componentizar os cards em vertical ou horizontal ou mini -medium
//colocando type ou alguma propriedade dentro do componente