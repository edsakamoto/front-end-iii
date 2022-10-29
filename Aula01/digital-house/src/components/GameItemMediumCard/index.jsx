export function GameItemMediumCard(props){

    

    return(
        <li>
            <img src={props.game.picture} alt="" />
            <h3>{props.game.name}</h3>
            {/* <p>{props.itemHolidayGame.plataforms.toString()}</p> */}
            <p>{props.game.categories.toString()}</p>
            <p>{props.game.oldPrice}</p>
            <p>{props.game.newPrice}</p>
        </li>

    )

}