export function GameItemMediumCard(props){

    

    return(
        <li>
            <img src={props.itemHolidayGame.picture} alt="" />
            <h3>{props.itemHolidayGame.name}</h3>
            {/* <p>{props.itemHolidayGame.plataforms.toString()}</p> */}
            <p>{props.itemHolidayGame.categories.toString()}</p>
            <p>{props.itemHolidayGame.oldPrice}</p>
            <p>{props.itemHolidayGame.newPrice}</p>
        </li>

    )

}