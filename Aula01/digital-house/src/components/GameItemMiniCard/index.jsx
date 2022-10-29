export function GameItemMiniCard(props){

    // if(document.getElementsByClassName('mini-card-early-access-game'){
    //     else{
    //         return(
    //             <li>
    //                 <img src={props.itemNewGame.picture} alt="" />
    //                 <h3>{props.itemNewGame.name}</h3>
    //                 <p>{props.itemNewGame.plataforms.toString()}</p>
    //                 <p>{props.itemNewGame.categories.toString()}</p>
    //                 <p>{props.itemNewGame.price}</p>            
    //             </li>
    //         )
    //     )
    //     }
        
    // }

    switch(document.getElementsByClassName('mini-card-early-access-game')){
        case false:
            return(
                <li>
                    <img src={props.itemNewGame.picture} alt="" />
                    <h3>{props.itemNewGame.name}</h3>
                    <p>{props.itemNewGame.plataforms.toString()}</p>
                    <p>{props.itemNewGame.categories.toString()}</p>
                    <p>{props.itemNewGame.price}</p>            
                    </li>)

    }
    
}

//componentizar os cards em vertical ou horizontal ou mini -medium
//colocando type ou alguma propriedade dentro do componente