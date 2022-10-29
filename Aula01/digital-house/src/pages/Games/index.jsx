import { GameItemMediumCard } from "../../components/GameItemMediumCard"
import { GameItemMiniCard } from "../../components/GameItemMiniCard"

export function Games(){


    const newGames = [
        {
            name: 'Hollow Knight',
            plataforms: ['windows'],
            categories: ['Metroidvania', 'Souls-like', 'Platformer2D'],
            price: '20,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg'
        },
        {
            name: "Don't Starve",
            plataforms: ['windows'],
            categories: ['SurvivalOpen', 'World Survival', 'CraftCrafting'],
            price: '30,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg'
        },
        {
            name: 'Cult of the Lamb',
            plataforms: ['windows'],
            categories: ['Horror', 'Cute', 'Roguelike'],
            price: '45,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg'
        }
    ]
    
    const halloweenGames = [
        {
            name: 'Inscryption',
            categories: ['Card', 'BattlerCard', 'GameStory Rich'],
            oldPrice: '100,00',
            newPrice: '30,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1092790/header.jpg'
        },
        {
            name: 'Hades',
            categories: ['Action', 'Roguelike', 'Indie', 'Action'],
            oldPrice: '80,00',
            newPrice: '15,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg'
        },
        {
            name: 'Darkest Dungeon',
            categories: ['Turn-BasedCombat', 'DarkFantasy', 'Roguelike'],
            oldPrice: '30,00',
            newPrice: '15,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/262060/header.jpg'
        },
        {
            name: 'Outlast',
            categories: ['Horror', 'First-Person', 'Survival Horror'],
            oldPrice: '100,00',
            newPrice: '40,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/238320/header.jpg'
        }
    ]
    
    const earlyAccessGames = [
        {
            name: 'Stardew Valleyt',
            plataforms: ['windows'],
            categories: ['Farming Sim', 'Life Sim', 'Pixel Graphics'],
            price: '20,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg'
        },
        {
            name: "Little Nightmares",
            plataforms: ['windows'],
            categories: ['Horror', 'Atmospheric', 'Adventure'],
            price: '30,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/424840/header.jpg'
        },
        {
            name: 'Bendy and the Ink Machine',
            plataforms: ['windows'],
            categories: ['Horror', 'First-Person', 'Singleplayer', 'PuzzleDark'],
            price: '45,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/622650/header.jpg'
        }
    ]
    
    const cheapGames = [
        {
            name: 'Little Misfortune',
            categories: ['Adventure', 'Point & Click', 'Indie'],
            oldPrice: '100,00',
            newPrice: '19,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/714120/header.jpg'
        },
        {
            name: 'Limbo',
            categories: ['Puzzle', 'Platformer', 'Indie'],
            oldPrice: '80,00',
            newPrice: '15,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/48000/header.jpg'
        },
        {
            name: 'Darkwood',
            categories: ['Horror', 'Survival'],
            oldPrice: '30,00',
            newPrice: '10,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/274520/header.jpg'
        },
        {
            name: 'Slender: The Arrival',
            categories: ['Horror', 'Survival Horror', 'First-Person'],
            oldPrice: '100,00',
            newPrice: '20,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/252330/header.jpg'
        }
    ]

    const holiday = 'Haloween '     

    return(
        <div className = 'game-site'>

            <section className='mini-card'>
                <h2>New Games</h2>
                <ul className='components-finded-mini-card'>
                    {
                        newGames.map(
                            mappingGame =>{
                                return (
                                   <GameItemMiniCard 
                                        game={mappingGame}                                   
                                   />                           
                                )
                            }
                        )
                    }
                </ul>
            
            </section>

            <section className='medium-card'>
                <h2>{holiday + ' Offers'} </h2>
                <ul className="components-finded-medium-card">
                    {
                        // holiday.toLowerCase()+'Games'.map(
                        halloweenGames.map(

                            mappingGame =>{
                                return(
                                    <GameItemMediumCard 
                                        game ={mappingGame}
                                    />
                                )
                            }

                        )

                    }
                </ul>
            </section>

            <section className='mini-card'>
                <h2>New Games</h2>
                <ul className='components-finded-mini-card'>
                    {
                        earlyAccessGames.map(
                            mappingGame =>{
                                return (
                                   <GameItemMiniCard //type=mini
                                   game={mappingGame}                                   
                                   />
                                )
                            }
                        )
                    }
                </ul>
            </section>


            <section className='medium-card-games'>
                <h2>{'Cheap Games' + ' Offers'} </h2>
                <ul className="components-finded-medium-card">
                    {
                        
                        cheapGames.map(

                            mappingGame =>{
                                return(
                                    <GameItemMediumCard 
                                        game ={mappingGame}
                                    />
                                )
                            }

                        )

                    }
                </ul>
            </section>    


        </div>
    )

}